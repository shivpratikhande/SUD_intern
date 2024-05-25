const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://shivpratikhande:4ET2T9kfiWFhRK69@cluster0.jzd0bd1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  email: String,
});

const Task = mongoose.model('Task', taskSchema);

app.post('/api/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.send(task);
});

app.get('/api/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

app.get('/api/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.send(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

app.delete('/api/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send({ message: 'Task deleted' });
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
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
  const now = new Date();
  const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

  const tasks = await Task.find({
    deadline: {
      $gte: now,
      $lte: oneHourLater,
    },
  });

  tasks.forEach(sendReminderEmail);
};

setInterval(checkTasks, 60 * 1000); // Check every minute

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port', process.env.PORT || 5000);
});