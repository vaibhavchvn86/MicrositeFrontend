import React, { useState } from "react";
import { commonServices } from "../../Utility/common.services";
import "./_common.scss";
import Accordion from "react-bootstrap/Accordion";
import SortingButtons from "./filterButton";
import MultiRangeSlider from "./multirangeSlider";

function Filter() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );

  const [openFilter, setfilter] = useState("0");
  const handleClick = (e) => {
    setfilter(e);
  };
  return (
    <div className="filter_wrap">
      <span>Filter</span>
      <div className="btn-filter ">
        <button className="clr-btn">Clear All</button>
        <button className="apply-btn">Apply</button>
      </div>
      <div className="filter-category">
        <div className="accordian-wrap mt-3">
          <div className="category">
            <span>Flower</span>
            <img
              src={images["downArrow.svg"]}
              alt="name"
              onClick={() => handleClick(1)}
            />
          </div>
          {openFilter === 1 ? (
            <div className="checkbox_wrap">
              <div className="check-box">
                <input type="checkbox" />
                <span>Roses</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Tulip</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Carnation</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Lilies</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Chrysanthemum</span>
              </div>
              <div className="check-box">
                <span className="moreSpan">Show more (10)</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="filter-category">
        <div className="accordian-wrap mt-3">
          <div className="category">
            <span>Flower</span>
            <img
              src={images["downArrow.svg"]}
              alt="name"
              onClick={() => handleClick(2)}
            />
          </div>
          {openFilter === 2 ? (
            <div className="checkbox_wrap">
              <div className="check-box">
                <input type="checkbox" />
                <span>Roses</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Tulip</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Carnation</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Lilies</span>
              </div>
              <div className="check-box">
                <input type="checkbox" />
                <span>Chrysanthemum</span>
              </div>
              <div className="check-box">
                <span className="moreSpan">Show more (10)</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="filter-category">
        <div className="accordian-wrap mt-3">
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
    </div>
  );
}
export default Filter;
