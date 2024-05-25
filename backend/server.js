const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');


const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  email: String,
  completed: { 
    type: Boolean, 
    default: false }

});

const Task = mongoose.model('Task', taskSchema);

app.post('/api/tasks', [
  body('title').isString().notEmpty(),
  body('description').isString().notEmpty(),
  body('deadline').isISO8601().toDate(),
  body('email').isEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(500).send({ error: 'Failed to create task' });
  }
});

/* app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks, "post successfully");
}); */
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

app.get('/api/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.send(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

app.patch('/api/tasks/:taskId', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const updatedTask = await Task.findByIdAndUpdate(taskId, { completed: true }, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task marked as completed', task: updatedTask });
  } catch (error) {
    console.error('Error marking task as completed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendReminderEmail = (task) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: task.email,
    subject: 'Task Reminder',
    text: `Reminder: Your task "${task.title}" is due at ${new Date(task.deadline).toLocaleString()}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

const checkTasks = async () => {
  try {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() +  60 * 1000);

    const tasks = await Task.find({
      deadline: {
        $gte: now,
        $lte: oneHourLater,
      },
    });

    tasks.forEach(sendReminderEmail);
  } catch (error) {
    console.error('Error checking tasks:', error);
  }
};
  
(function checkTasksPeriodically() {
  checkTasks().then(() => {
    setTimeout(checkTasksPeriodically, 60 * 1000); // Check every minute
  }).catch((error) => {
    console.error('Error in scheduled task:', error);
    setTimeout(checkTasksPeriodically, 60 * 1000); // Retry after a minute on error
  });
})();

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port', process.env.PORT || 5000);
});
