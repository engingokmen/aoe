import React from "react";
import { useSelector } from "react-redux";
import { selectUnitById } from "../features/units/units.reducer";
import { useParams } from "react-router-dom";
import Listing from "../common/listing/Listing";

const Detail = () => {
  const { id } = useParams();

  const item = useSelector((state) => selectUnitById(state, id));

  const itemDetail = item
    ? Object.entries(item).map(([key, value]) => (
        <div key={key}>
          <span>{key} : </span>
          {typeof value === "object" ? (
            <Listing key={JSON.stringify(value)} data={value} />
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))
    : null;

  return <div>{itemDetail}</div>;
};

export default Detail;
