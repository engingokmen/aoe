import { combineReducers } from "redux";
import units from "../features/units/units.reducer";
import filters from "../features/filters/filter.reducer";

export default combineReducers({
  units,
  filters,
});
