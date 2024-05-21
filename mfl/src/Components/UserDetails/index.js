import React, { useState } from "react";
import "./_userDetails.scss";
import ProfileDashboard from "./Profile/profile";
import CouponsOffers from "./Coupons&Offers/couponOffer";
import TravelHistory from "./TravelHistory/travelHistory";
import ReferEarn from "./Refer&Earn/referEarn";
import PointsBalance from "./PointsBalance/pointsbalance";
import RewardCash from "./RewardCash/rewardCash";

function ProfileSideView() {
  const [stateactive, setStateActive] = useState(1);
  const [statesubactive, setStatesubActive] = useState(1);
  const handleProfile = (e) => {
    setStateActive(e);
  };
  const handlesubmenu = (e) => {
    setStatesubActive(e);
  };
  return (
    <div className="main_container ">
      <div className="sidebarContent">
        <ul className="side_wrap">
          <li
            onClick={() => handleProfile(1)}
            className={stateactive === 1 ? "li-active" : "li-inactive"}
          >
            Profile
          </li>
          <li
            onClick={() => handleProfile(2)}
            className={stateactive === 2 ? "li-active" : "li-inactive"}
          >
            Coupons & Offers
          </li>
          <li
            onClick={() => handleProfile(3)}
            className={stateactive === 3 ? "li-active" : "li-inactive"}
          >
            Order History
          </li>
          {stateactive === 3 ? (
            <ul className="sub-menu">
              <li
                onClick={() => handlesubmenu(1)}
                className={
                  statesubactive === 1 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Deal
              </li>
              <li
                onClick={() => handlesubmenu(2)}
                className={
                  statesubactive === 2 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Shop
              </li>
              <li
                onClick={() => handlesubmenu(3)}
                className={
                  statesubactive === 3 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Gifting
              </li>
              <li
                onClick={() => handlesubmenu(4)}
                className={
                  statesubactive === 4 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Utility
              </li>
              <li
                onClick={() => handlesubmenu(5)}
                className={
                  statesubactive === 5 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Travel
              </li>
              <li
                onClick={() => handlesubmenu(6)}
                className={
                  statesubactive === 6 ? "li-active-sub" : "li-inactive-sub"
                }
              >
                -Voucher
              </li>
            </ul>
          ) : null}
          <li
            onClick={() => handleProfile(4)}
            className={stateactive === 4 ? "li-active" : "li-inactive"}
          >
            Refer & Earn
          </li>
          <li
            onClick={() => handleProfile(5)}
            className={stateactive === 5 ? "li-active" : "li-inactive"}
          >
            Point Balance
          </li>
          <li
            onClick={() => handleProfile(6)}
            className={stateactive === 6 ? "li-active" : "li-inactive"}
          >
            Reward Cash
          </li>
        </ul>
        {/* <div> */}
          {stateactive === 1 ? <ProfileDashboard /> : null}
          {stateactive === 2 ? <CouponsOffers /> : null}
          {stateactive === 3 ? <TravelHistory /> : null}
          {stateactive === 4 ? <ReferEarn /> : null}
          {stateactive === 5 ? <PointsBalance /> : null}
          {stateactive === 6 ? <RewardCash /> : null}
        {/* </div> */}
      </div>
    </div>
  );
}
export default ProfileSideView;
