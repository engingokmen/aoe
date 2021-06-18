import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUnitById } from "../../features/units/units.reducer";
import Listing from "../listing/Listing";
import PropTypes from "prop-types";

const Row = ({ columns, itemId }) => {
  const item = useSelector((state) => selectUnitById(state, itemId));

  return (
    <tr>
      {columns.map((column) => (
        <td key={column.key}>
          <Link to={`/units/${itemId}`}>
            {typeof item[column.field] === "object" ? (
              <Listing
                key={JSON.stringify(item[column.field])}
                data={item[column.field]}
              />
            ) : (
              <span key={item[column.field]}>{item[column.field]}</span>
            )}
          </Link>
        </td>
      ))}
    </tr>
  );
};

Row.propTypes = {
  columns: PropTypes.array,
  item: PropTypes.object,
};

export default Row;
