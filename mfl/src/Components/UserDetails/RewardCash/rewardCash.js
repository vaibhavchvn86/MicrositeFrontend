import React, { useState } from "react";
import "../_userDetails.scss";
import "../../../Assets/Style/style.scss";
import { commonServices } from "../../../Utility/common.services";

function RewardCash() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>
      <div className="reward_cash_wrap">
        <div className="reward-cash content-box ">
          <img src={images[""]} alt="name" />
          <div className="reward-points-wrap">
            <div className="reward-points">
              <h3>Reward Cash</h3>
              <span>200</span>
            </div>
            <span>A quick & convenient way to pay & refund</span>
          </div>
        </div>

        <div className="work-flow-box_rc content-box  mt-4">
          <h3>How it works</h3>
          <div className="row mt-3 mb-4">
            <div className="col-sm-3">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Instant Checkout</span>
                  <p>One-click,easy & fast checkout</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Many more benefits</span>
                  <p>Benefits & offers on using Reward Cash</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Consolidated Money</span>
                  <p>Gift cards, refunds & cashbacks in one place</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Faster Refunds</span>
                  <p>Get instant refunds as Reward Cash.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="hs-container content-box  mt-4">
          <div className="header_name_hs">
            <span>Reward Cash History</span>
          </div>

          <div className=" table-refer mt-4">
            <div className="table-content">
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Details</th>
                    <th>Balance</th>
                    <th>Cash</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>05/05/2023</td>

                    <td>Nikhil Malhotra</td>
                    <td>
                      <span>Send Reminder</span>
                    </td>
                    <td>
                      <span>Send Reminder</span>
                    </td>
                    <td>
                      <span>Send Reminder</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default RewardCash;
