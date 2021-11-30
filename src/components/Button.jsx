import React from "react";

import "./Button.css";

const Button = ({ children, onClick }) => {
  return (
    <buton onClick={onClick} className="button">
      {children}
    </buton>
  );
};

export default Button;
