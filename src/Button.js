import React from 'react';

const Button = ({ message, type, callback = event => {} }) => {
  return (
    <div onClick={event => callback(event)}>
      <button type={type}>{message}</button>
    </div>
  );
};

export default Button;
