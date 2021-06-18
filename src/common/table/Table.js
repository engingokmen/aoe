import React from "react";
import Row from "./Row";

export default function Table(props) {
  const header = props.columns.map((column) => (
    <th key={column.key}>
      {/* capitilized first letter */}
      {column.field.charAt(0).toUpperCase() + column.field.slice(1)}
    </th>
  ));

  const body = props.data.map((itemId) => (
    <Row key={itemId} itemId={itemId} columns={props.columns} />
  ));

  return (
    <table>
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}
