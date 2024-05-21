import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./_utility.scss";
import { commonComponets } from "../Common/commonComponent";
import { commonServices } from "../../Utility/common.services";

function Utility() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="utility_container">
      <div className="utility-header">
        <ul>
          <li className="active">
            <img src={images["mobile.svg"]} alt="" />
            <p>Mobile</p>
          </li>
          <li>
            <img src={images["dth.svg"]} alt="" />
            <p>DTH</p>
          </li>
          <li>
            <img src={images["water.svg"]} alt="" />
            <p>Water</p>
          </li>
          <li>
            <img src={images["bulb.svg"]} alt="" />
            <p>Electricty Bill</p>
          </li>
          <li>
            <img src={images["cylinder.svg"]} alt="" />
            <p>Gas Bill</p>
          </li>
          <li>
            <img src={images["cylinder.svg"]} alt="" />
            <p>Insurrance</p>
          </li>
          <li>
            <img src={images["cylinder.svg"]} alt="" />
            <p>Subscription</p>
          </li>
        </ul>
      </div>
      <div className="utility-content-box main_container">
        <div>breadcrum</div>
        <div className="content-box dth-box">
          <h4>Recharge your Mobile Number</h4>
          <div className="input-span-wrap">
            <div className="input-span-content">
              <input type="radio" id="checkpre" name="prepaid" />
              <label htmlFor="checkpre" className="active ">
                Prepaid
              </label>
            </div>
            <div className="input-span-content">
              <input type="radio" id="checkPost" name="prepaid" />
              <label htmlFor="checkPost">Postpaid</label>
            </div>
          </div>
          <div className="operator-details ">
            <div className="row">
              <div className="col-sm-4">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Pincode</label>
                </div>
              </div>
              <div className="col-sm-4">{commonComponets.SingleDropDown("State")}</div>
              <div className="col-sm-4">{commonComponets.SingleDropDown()}</div>
            </div>
            <button>Browse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Utility;
