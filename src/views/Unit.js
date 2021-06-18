import React from "react";
import { useSelector } from "react-redux";
import Units from "../features/units/Units";
import Radio from "../common/radio/Radio";
import {
  AgeFilter as ageFilter,
  CostFilter as costFilter,
} from "../features/filters/filter.reducer";
import store from "../store/store";
import CheckboxWithRange from "../common/checkbox/CheckboxWithRange";
import { selectAge, selectCosts } from "../features/filters/filter.reducer";

const Unit = () => {
  const age = useSelector(selectAge);
  const costs = useSelector(selectCosts);
  const action = (type, payload) => store.dispatch({ type, payload });

  function onRadioChange(e) {
    action("AgeFilterChanged", e.target.value);
  }

  const radioGroup = Object.entries(ageFilter).map(([property, value]) => (
    <Radio
      key={property}
      property={property}
      value={value}
      onChange={onRadioChange}
      defaultValue={age}
    />
  ));

  function onCheckboxChange(e) {
    action("CostFilterChanged", {
      cost: e.target.id,
      changeType: e.target.checked ? "Added" : "Removed",
    });
  }

  function onRangeChange(e) {
    action("RangeChanged", {
      cost: e.target.id,
      costValue: e.target.value,
    });
  }

  const checkboxWithRangeGroup = Object.entries(costFilter).map(
    ([property, value]) => (
      <CheckboxWithRange
        key={property}
        property={property}
        value={value}
        rangeValue={costs[property]}
        onCheckboxChange={onCheckboxChange}
        onRangeChange={onRangeChange}
        disabled={costs[property] == null}
      />
    )
  );

  return (
    <>
      {radioGroup}
      {checkboxWithRangeGroup}
      <Units />
    </>
  );
};

export default Unit;
