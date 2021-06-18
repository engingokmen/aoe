import React from "react";

const Range = (props) => {
  return (
    <span>
      <input type="range" id={props.property} name={props.name} {...props} />
      <label htmlFor={props.property}>{props.value}</label>
    </span>
  );
};

export default Range;
