import React from "react";

const SortButton = (props) => (
  <div className="sortBtn">
    <button onClick={props.handleClick}>Sort Scores</button>
  </div>
);
export default SortButton;
