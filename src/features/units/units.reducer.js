import { createSelector } from "reselect";
import json from "../../age-of-empires-units.json";
import { AgeFilter } from "../filters/filter.reducer";

export default function units(state = [], action) {
  switch (action.type) {
    case "ADD_UNIT":
      return [...state, action.obj];
    case "FAKE_REQUEST":
      return [...json.units];
    default:
      return state;
  }
}

export const selectUnits = (state) => state.units;

export const selectUnitById = (state, id) => {
  return selectUnits(state).find((unit) => unit.id === parseInt(id));
};

// export const selectFilteredTodos = createSelector((state) => state);
export const selectUnitIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectUnits,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  (units) => units.map((unit) => unit.id)
);

export const selectFilteredUnits = createSelector(
  // First input selector: all todos
  selectUnits,
  // Second input selector: all filter values
  (state) => state.filters,
  // Output selector: receives both values
  (units, filters) => {
    const { age, costs } = filters;
    const showAllAges = age === AgeFilter.All;
    if (showAllAges && Object.entries(costs).length === 0) {
      return units;
    }

    return units.filter((unit) => {
      const ageMatches = unit.age === "All" || unit.age === age;

      function costMatches(filterCosts) {
        return Object.keys(filterCosts).length === 0
          ? () => true // If none is selected, match all
          : function (unitCosts) {
              for (const unitCostProperty in unitCosts) {
                for (const filterProperty in filterCosts) {
                  if (unitCostProperty === filterProperty) {
                    // Match if it is in the range
                    if (
                      unitCosts[unitCostProperty] > filterCosts[filterProperty]
                    ) {
                      return true;
                    }
                  }
                }
              }
              return false;
            };
      }

      console.log(age, unit.age, ageMatches);

      const costMatchesUnitCost = costMatches(costs);
      return ageMatches && costMatchesUnitCost(unit.cost);
    });
  }
);

export const selectFilteredUnitIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredUnits,
  // And derive data in the output selector
  (filteredUnits) => filteredUnits.map((unit) => unit.id)
);
