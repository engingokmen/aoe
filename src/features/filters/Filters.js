import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "../../common";
import store from "../../store/store";
import { selectFilteredUnitIds } from "./units.reducer";

const Filters = (props) => {
  const filteredUnitIds = useSelector(selectFilteredUnitIds);
  const action = (type) => store.dispatch({ type });

  useEffect(() => {
    action("FETCH_UNITS");
  }, []);

  const columns = [
    { key: 1, field: "id" },
    { key: 2, field: "name" },
    { key: 3, field: "age" },
    { key: 4, field: "cost" },
  ];

  return (
    <div>
      <Table columns={columns} data={filteredUnitIds} />
    </div>
  );
};

export default Filters;
