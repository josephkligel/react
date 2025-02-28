import React from "react";
import { Fragment } from "react";

function ListGroup() {
  const items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  const itemIterator = () => items.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">{itemIterator()}</ul>
    </>
  );
}

export default ListGroup;
