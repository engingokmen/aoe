import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

function objectToArrayString(data) {
  const list = [];

  for (const [key, value] of Object.entries(data)) {
    list.push(`${key}: ${value}`);
  }
  return list;
}

const Listing = ({ data = [] }) => {
  let arrayString = [];
  if (Array.isArray(data)) arrayString = data;
  if (data != null && typeof data === "object")
    arrayString = objectToArrayString(data);

  const lengthOfArrayString = arrayString.length; // used for comma seperation

  return (
    <>
      {arrayString.map((item, index) => (
        <span key={item}>
          <ListItem key={item} item={item} />
          {index < lengthOfArrayString - 1 && ","}
        </span>
      ))}
    </>
  );
};

Listing.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Listing;
