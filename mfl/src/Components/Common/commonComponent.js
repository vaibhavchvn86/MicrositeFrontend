import { useState } from "react";
import { commonServices } from "../../Utility/common.services";
import "./_common.scss";
export const commonComponets = {
  DealCard,
  CatergoryCard,
  SetOposite,
  SetTrueFalse,
  PointBox,
  SingleDropDown,
};
function DealCard() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="dealCard_wrap">
      <img src={images["topD_01.png"]} alt="images" />

      <div className="deal-details">
        <h6>Oven Story</h6>
        <span className="">Get Rs.125 off on a minimum order of Rs.249 .</span>
      </div>
    </div>
  );
}
function CatergoryCard() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="categoryCard_wrap">
      <img src={images["electronics.png"]} />
      <div className="category-details">
        <span>Health & Beauty</span>
        <div className="viewOffer">
          <img src={images[""]} />
          <span>View Offer</span>
        </div>
      </div>
    </div>
  );
}
function PointBox() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div class="point_box_common">
      <img src={images["star.svg"]} alt="star" />
      <div className="span_nm">50 Pts</div>
    </div>
  );
}
function SingleDropDown(param) {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [showulbbox, setshowulbbox] = useState(false);
  const handleulBox = () => {
    setshowulbbox(!showulbbox);
  };
  return (
    <div className="dropdownBox" >
      <label>{param}</label>
      <div className="span-img"  onClick={handleulBox} >
        <span className="input-box">Maharastra</span>
        <img src={images["downArrow.svg"]}/>
      </div>
      {showulbbox ? (
        <div className="ul-li-drp">
          <ul>
            <li>Maharashtra</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function SetOposite(Val) {
  return !Val;
}
function SetTrueFalse(Val) {
  return Val;
}
