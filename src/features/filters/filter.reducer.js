export const AgeFilter = {
  All: "All",
  Dark: "Dark",
  Feudal: "Feudal",
  Castle: "Castle",
  Imperial: "Imperial",
};

export const CostFilter = {
  Wood: { min: 0, max: 200, default: 100 },
  Food: { min: 0, max: 200, default: 100 },
  Gold: { min: 0, max: 200, default: 100 },
};

const initialState = {
  age: AgeFilter.All,
  costs: {},
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case "AgeFilterChanged": {
      return { ...state, age: action.payload };
    }
    case "CostFilterChanged": {
      let { cost, changeType } = action.payload;
      const { costs } = state;
      switch (changeType) {
        case "Added": {
          if (
            Object.entries(costs).findIndex(([key, value]) => key === cost) > -1
          ) {
            // This cost already is set as a filter. Don't change the state.
            return state;
          }

          return {
            ...state,
            costs: { ...costs, [cost]: CostFilter[cost].default },
          };
        }
        case "Removed": {
          return {
            ...state,
            costs: Object.fromEntries(
              Object.entries(state.costs).filter(([key, value]) => key !== cost)
            ),
          };
        }
        default:
          return state;
      }
    }
    case "RangeChanged": {
      if (
        Object.entries(state.costs).findIndex(
          ([key, value]) => key === action.payload.cost
        ) === -1
      ) {
        return state;
      }
      return {
        ...state,
        costs: {
          ...state.costs,
          [action.payload.cost]: action.payload.costValue,
        },
      };
    }
    default:
      return state;
  }
}

export const selectAge = (state) => state.filters.age;
export const selectCosts = (state) => state.filters.costs;
