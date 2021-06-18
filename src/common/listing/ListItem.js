import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item }) => {
  return <span>{item}</span>;
};

ListItem.propTypes = {
  item: PropTypes.string,
};

export default ListItem;
