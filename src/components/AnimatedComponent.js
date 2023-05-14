import React from "react";

const AnimatedComponent = ({ children, className, parentClass }) => {
  return (
    <div className={`relative ${parentClass}`}>
      <div className={`invisible h-fit w-fit ${className}`}>{children}</div>
      <div className={`absolute top-0 h-fit w-fit ${className}`}>{children}</div>
    </div>
  );
};

export default AnimatedComponent;
