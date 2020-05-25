import React from "react";
import allCountryScores from "./Scores";
import "./App.css";
import ScoreTables from "./ScoreTables";

const App = () => {
  return (
    <div>
      <ScoreTables generalScores={allCountryScores} />
    </div>
  );
};

export default App;
