import React from "react";
import Checkbox from "./Checkbox";
import Range from "../range/Range";

const CheckboxWithRange = (props) => {
  return (
    <div>
      <Checkbox
        property={props.property}
        value={props.property}
        onChange={props.onCheckboxChange}
      />
      <Range
        value={props.rangeValue ? props.rangeValue : props.value.default}
        property={props.property}
        min={props.value.min}
        max={props.value.max}
        onChange={props.onRangeChange}
        disabled={props.disabled}
      />
    </div>
  );
};

export default CheckboxWithRange;
