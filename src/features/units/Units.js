import React from "react";
import { useSelector } from "react-redux";
import { Table } from "../../common";
import { selectFilteredUnitIds } from "./units.reducer";

const Units = () => {
  const filteredUnitIds = useSelector(selectFilteredUnitIds);

  const columns = [
    { key: 1, field: "id" },
    { key: 2, field: "name" },
    { key: 3, field: "age" },
    { key: 4, field: "cost" },
  ];

  return (
    <>
      <Table columns={columns} data={filteredUnitIds} />
    </>
  );
};

export default Units;
