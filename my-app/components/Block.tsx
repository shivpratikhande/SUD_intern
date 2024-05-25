import React from 'react';

interface BlockProps {
  children: React.ReactNode;
  className?: string;
}

const Block: React.FC<BlockProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-gray-200 p-6 rounded-lg shadow-lg bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Block;
