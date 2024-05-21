import React from "react";
import CardDetails from "../../Common/commonSwiper";
import Filter from "../../Common/filter";
import SortingButtons from "../../Common/filterButton";
//import commonComponets from "../../Common/commonComponets";

function WomenWear() {
  return (
    <div className="container_grey">
      <div className="container ">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
            <div className="btn-card-wrap-filter">
              <SortingButtons />
              <div className="row">
                <div className="col-4 mb-3 mt-3">
                  <CardDetails />
                </div>
                <div className="col-4  mb-3 mt-3">
                  <CardDetails />
                </div>
                <div className="col-4  mb-3 mt-3">
                  <CardDetails />
                </div>
                <div className="col-4  mb-3 mt-3">
                  <CardDetails />
                </div>
                <div className="col-4  mb-3 mt-3">
                  <CardDetails />
                </div>
                <div className="col-4  mb-3 mt-3">
                  <CardDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WomenWear;
