import React, { useState } from "react";
import "../_userDetails.scss";
import "../../../Assets/Style/style.scss";
import { commonServices } from "../../../Utility/common.services";
import TravelDetails from "./travelDitails";
import OrderDetails from "./orderDetails";

function TravelHistory() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [statemonth, setStatemonth] = useState("3 month");
  const [stateCategory, setstateCategory] = useState("All");
  return (
    <>
      {/* <div className="hs-container content-box ">
       
          <div className="header_name_hs">
            <span>Order History</span>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4 mt-3 ">
              <div className="search_filter_box">
                <input
                  id="search_drop"
                  type="text"
                  placeholder="Search by Order ID"
                  className="inputSearch"
                />
                <img
                  src={images["search_icon.svg"]}
                  alt="img"
                  className="srh_btn"
                />
              </div>
            </div>
            <div className="col-sm-2 mt-3 "></div>

            <div className="col-sm-3 mt-3 ">
              <div className="filter-box">
                <div className="duration_box">
                  <label className="lbl-duration">Duration</label>
                  <span>{statemonth}</span>
                  <img
                    src={images["downArrow.svg"]}
                    alt="img"
                    className="srh_btn"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3 mt-3">
              <div className="filter-box">
                <div className="duration_box">
                  <label className="lbl-duration">Category</label>
                  <span>{stateCategory}</span>
                  <img
                    src={images["downArrow.svg"]}
                    alt="img"
                    className="srh_btn"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-view-wrap mt-4">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Items</th>
                  <th>Order Status</th>
                  <th>Amount</th>
                  <th>Points Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JDUEW7289227</td>
                  <td>05-Apr-2022 </td>
                  <td>
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                    Flight - BOM to DEL
                  </td>
                  <td>
                    {" "}
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                  </td>
                  <td>
                    <div>
                      <span className="orderstatus_card upcoming">
                        UPCOMING
                      </span>
                    </div>
                  </td>
                  <td>799</td>
                  <td>+200</td>
                </tr>
                <tr>
                  <td>JDUEW7289227</td>
                  <td>05-Apr-2022 </td>
                  <td>
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                    Flight - BOM to DEL
                  </td>
                  <td>
                   
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                  </td>
                  <td>
                    <div>
                      <span className="orderstatus_card deliver">
                        DELIVERED
                      </span>
                    </div>
                  </td>
                  <td>799</td>
                  <td>+200</td>
                </tr>
                <tr>
                  <td>JDUEW7289227</td>
                  <td>05-Apr-2022 </td>
                  <td>
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                    Flight - BOM to DEL
                  </td>
                  <td>
                    {" "}
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                  </td>
                  <td>
                    <div>
                      <span className="orderstatus_card delivered">
                        DELIVERED
                      </span>
                    </div>
                  </td>
                  <td>799</td>
                  <td>+200</td>
                </tr>
                <tr>
                  <td>JDUEW7289227</td>
                  <td>05-Apr-2022 </td>
                  <td>
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                    Flight - BOM to DEL
                  </td>
                  <td>
                    {" "}
                    <img src={images[".svg"]} alt="img" className="srh_btn" />
                  </td>
                  <td>
                    <span className="orderstatus_card returnRequest">
                      RETURN REQUEST
                    </span>
                  </td>
                  <td>799</td>
                  <td>+200</td>
                </tr>
              </tbody>
            </table>
          </div>
      
      </div> */}

      {/* <TravelDetails/> */}
      <OrderDetails/>
    </>
  );
}
export default TravelHistory;
