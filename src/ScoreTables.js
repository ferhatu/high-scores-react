import React from "react";
const ScoreTables = (props) => (
  <div className="App">
    <h1 className="App">High Scores per Country</h1>
    {props.generalScores.map((data) => {
      return (
        <div className="scores-container">
          <span className="country-name">{data.name}</span>
          {data.scores.map((data) => {
            return (
              <div className="scores-ns">
                <span>{data.n}</span>
                <span> {data.s}</span>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);
export default ScoreTables;
