import React, { useState } from "react";
import { commonServices } from "../../Utility/common.services";
import "./_common.scss";

function SortingButtons() {
  return (
    <div className="sortBtn_wrap">
      <span>Sort by:</span>
      <div className="btn-container">
        <button className="active">Popularity</button>
        <button >Low To High Points</button>
        <button> High To Low Points</button>
      </div>
    </div>
  );
}
export default SortingButtons;
