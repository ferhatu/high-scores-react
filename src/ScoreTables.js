import React, { useState } from "react";
import SortButton from "./SortButton";

const ScoreTables = (props) => {
  const [score, setScore] = useState(false);
  const ToogleSrt = () => {
    setScore(!score);
  };
  const sortScores = (arr, sortValue) => {
    return sortValue
      ? arr.sort((a, b) => b.s - a.s)
      : arr.sort((a, b) => a.s - b.s);
  };
  return (
    <div className="App">
      <h1 className="heading">High Scores per Country</h1>
      <SortButton handleClick={ToogleSrt} />
      <div className="all-scores">
        {props.generalScores
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((data, index) => {
            return (
              <div key={index} className="scores-container">
                <div className="country-name">
                  <span>HIGH SCORES: {data.name}</span>{" "}
                </div>
                {/* {data.scores
                .sort((x, y) => y.s - x.s) */}
                {sortScores(data.scores, score).map((data, index) => {
                  return (
                    <div key={index} className="scores-ns">
                      <div className="scores-n">
                        <span>{data.n.toUpperCase()}</span>
                      </div>
                      <div className="scores-s">
                        <span> {data.s}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ScoreTables;
