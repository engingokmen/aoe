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
  ageFilter: AgeFilter.All,
  costsFilter: {},
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case "AgeChange": {
      console.log(action.payload.payload);
      return { ...state, ageFilter: action.payload.payload };
    }
    case "CostFilterChanged": {
      let { cost, changeType } = action.payload;
      const { costsFilter } = state;
      switch (changeType) {
        case "Added": {
          if (
            Object.entries(costsFilter).findIndex(
              ([key, value]) => key === cost
            ) > -1
          ) {
            // This cost already is set as a filter. Don't change the state.
            return state;
          }

          return {
            ...state,
            costsFilter: { ...costsFilter, [cost]: CostFilter[cost].default },
          };
        }
        case "Removed": {
          return {
            ...state,
            costsFilter: Object.fromEntries(
              Object.entries(state.costsFilter).filter(
                ([key, value]) => key !== cost
              )
            ),
          };
        }
        default:
          return state;
      }
    }
    case "RangeChanged": {
      if (
        Object.entries(state.costsFilter).findIndex(
          ([key, value]) => key === action.payload.cost
        ) === -1
      ) {
        return state;
      }
      return {
        ...state,
        costsFilter: {
          ...state.costsFilter,
          [action.payload.cost]: action.payload.costValue,
        },
      };
    }
    default:
      return state;
  }
}

export const selectAge = (state) => state.filters.ageFilter;
export const selectCosts = (state) => state.filters.costsFilter;
