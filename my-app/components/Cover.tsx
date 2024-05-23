import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';



  //@ts-ignore
const Cover = ({ imageUrl, color, children }) => {
  const coverStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundColor: color,
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden" style={coverStyle}>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center">
        {children}
      </div>
    </div>
  );
};

Cover.propTypes = {
  imageUrl: PropTypes.string, // URL of the background image
  color: PropTypes.string,    // Background color
  children: PropTypes.node,   // Content to be displayed on top of the cover
};

export default Cover;
