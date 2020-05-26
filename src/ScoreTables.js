import React from "react";
const ScoreTables = (props) => (
  <div className="App">
    <h1 className="heading">High Scores per Country</h1>
    <div className="all-scores">
      {props.generalScores.map((data) => {
        return (
          <div className="scores-container">
            <div className="country-name">
              <span>HIGH SCORES: {data.name}</span>{" "}
            </div>
            {data.scores.map((data) => {
              return (
                <div className="scores-ns">
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
export default ScoreTables;
