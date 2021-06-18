import React from "react";

const Checkbox = (props) => {
  return (
    <span>
      <input
        type="checkbox"
        id={props.property}
        name={props.name}
        onChange={props.onChange}
      />
      <label htmlFor={props.property}>{props.value}</label>
    </span>
  );
};

export default Checkbox;
