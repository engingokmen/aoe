import React from "react";

const Radio = (props) => {
  return (
    <span key={props.property}>
      <input
        type="radio"
        id={props.property}
        name="radio"
        value={props.value}
        onChange={props.onChange}
        checked={props.defaultValue === props.property}
      />
      <label htmlFor={props.property}>{props.value}</label>
    </span>
  );
};

export default Radio;
