import React, { useState } from "react";
import "../_userDetails.scss";
import "../../../Assets/Style/style.scss";
import { commonServices } from "../../../Utility/common.services";

function ReferEarn() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>

        <div className="referEarnWrap ">
          <div className="refer-container content-box">
            <img src={images[""]} alt="name" />
            <div className="share-container">
              <div className="share-coupon-box">
                <span>Share & get exicting rewards each</span>
                <p>
                  Refer your friend & get 200 loyalty points each on their first
                  transaction
                </p>
                <div className="coupon-code-box">
                  <p>EKREF5368</p>
                  <button>Copy</button>
                </div>
              </div>
              <div className="span-wrp">
                <div className="line"></div>
                <span>Or share via</span>

                <div className="line"></div>
              </div>
              <div className="media-box mt-4">
                <div className="media-card">
                  <img src={images[""]} alt="name" />
                  <span>Facebook</span>
                </div>
                <div className="media-card">
                  <img src={images[""]} alt="name" />
                  <span>Whatsapp</span>
                </div>
                <div className="media-card">
                  <img src={images[""]} alt="name" />
                  <span>Twitter</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-box mt-4">
            <div className="trc-view">
              <div className="row">
                <div className="col-sm-6">
                  <div className="trc-content">
                    <img src={images[""]} alt="name" />
                    <div>
                      <span>TRC Cash - 200</span>
                      <p>You’ve earned from Referral</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="trc-content brd-right">
                    <img src={images[""]} alt="name" />
                    <div>
                      <span>1 Peer</span>
                      <p>Accepted your referral invite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="content-box mt-4">
            <div className="hs-container">
              <div className="header_name_hs">
                <span>You’ve invited</span>
              </div>

              <div className=" table-refer mt-4">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>05/05/2023</td>

                      <td>Nikhil Malhotra</td>
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
export default ReferEarn;
