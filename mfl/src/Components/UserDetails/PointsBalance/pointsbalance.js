import React, { useState } from "react";
import "../_userDetails.scss";
import "../../../Assets/Style/style.scss";
import { commonServices } from "../../../Utility/common.services";

function PointsBalance() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>
      <div className="pointbalance_wrap">
        <div className="tier-ern-redem_wrap content-box">
          <div className="row ">
            <div className="col-sm-6">
              <div className="progress-box">
                <img src={images[""]} alt="name" />
                <div className="begn-points">
                  <div className="tiername-pts">
                    <h1>Beginner</h1>
                    <div className="pts-block">
                      <span>200 </span>
                      pts.
                    </div>
                  </div>
                  <div className="progress-bar-blance">
                    <progress value="32" max="100" />
                  </div>
                  <span>
                    Use TRC to earn more points, redeem exciting <br></br>deals
                    & enjoy exclusive benefits.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="earn-reedem-box">
                <div className="ern-content">
                  <img src={images[""]} alt="name" />
                  <div>
                    <span>Earn Points</span>
                    <p>
                      Collect coins with every <br></br> purchase you make
                      <span>{">"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="earn-reedem-box brd-rht">
                <div className="ern-content">
                  <img src={images[""]} alt="name" />
                  <div>
                    <span>Redeem Points</span>
                    <p>
                      Redeem your points to<br></br> enjoy exclusive offers!
                      <span>{">"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-flow-box content-box ">
          <h3>How it works</h3>
          <div className="row mt-3 mb-4">
            <div className="col-sm-4">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Earn Points for every Order</span>
                  <p>
                    You earn 1 point for every Rs.100 <br></br>you spend on
                    shopping.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Earn Points for every Order</span>
                  <p>
                    You earn 1 point for every Rs.100 <br></br> you spend on
                    shopping.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="points-detailing">
                <img src={images[""]} alt="img" />
                <div className="pts-span-p">
                  <span>Earn Points for every Order</span>
                  <p>
                    You earn 1 point for every Rs.100<br></br> you spend on
                    shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-wrap">
            <h3>Benefits & Tiers</h3>
            <div className="row ">
              <div className="col-sm-4">
                <div className="tier-card-wrap">
                  <div className="gradient-box">
                    <span>Beginner</span>
                    <p>Earn 1x TRC points.</p>
                    <p className="margin-p">6 Beginner Benefits</p>
                  </div>
                  <div className="circle-div">
                    <div className="circle-box"></div>
                  </div>
                  <div className="tier-details-wrap">
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="tier-card-wrap">
                  <div className="gradient-box">
                    <span>Beginner</span>
                    <p>Earn 1x TRC points.</p>
                    <p className="margin-p">6 Beginner Benefits</p>
                  </div>
                  <div className="circle-div">
                    <div className="circle-box"></div>
                  </div>
                  <div className="tier-details-wrap">
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="tier-card-wrap">
                  <div className="gradient-box">
                    <span>Beginner</span>
                    <p>Earn 1x TRC points.</p>
                    <p className="margin-p">6 Beginner Benefits</p>
                  </div>
                  <div className="circle-div">
                    <div className="circle-box"></div>
                  </div>
                  <div className="tier-details-wrap">
                    <div className="check-conditions">
                      <input type="checkbox" />
                      <div>
                        <span>
                          Free Shipping for 6 months<br></br> Enjoy free
                          shipping on all your purchases for 6<br></br> months
                          (15 Sep - !5 Feb’22)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-point-blc content-box">
          <h4>Points History</h4>
          <div className="table-context">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Details</th>
                  <th>Balance</th>
                  <th>Points</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23737289227</td>
                  <td>Deal Amazon Voucher</td>
                  <td>440</td>
                  <td>+20</td>
                  <td>05/04/22 </td>
                </tr>
                <tr>
                  <td>23737289227</td>
                  <td>Deal Amazon Voucher</td>
                  <td>440</td>
                  <td>+20</td>
                  <td>05/04/22 </td>
                </tr>
               
                <tr>
                  <td>23737289227</td>
                  <td>Deal Amazon Voucher</td>
                  <td>440</td>
                  <td>+20</td>
                  <td>05/04/22 </td>
                </tr>
                <tr>
                  <td>23737289227</td>
                  <td>Deal Amazon Voucher</td>
                  <td>440</td>
                  <td>+20</td>
                  <td>05/04/22 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default PointsBalance;
