import React from "react";
import { commonComponets } from "../Common/commonComponent";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";
import { commonServices } from "../../Utility/common.services";
import "./_deals.scss";
SwiperCore.use(Navigation);

function Deals(props) {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(props.screenSize, "screenSizescreenSize");
  return (
    <div className="container mt-5">

      <div className="dealTabs mb-5 ">
        <div className="tab-block">
          <img src={images["checkList.svg"]} />
          <span>All</span>
        </div>
        <div className="tab-block">
          <img src={images["dealShop.svg"]} />
          <span>Shopping</span>
        </div>

        <div className="tab-block">
          <img src={images["health.svg"]} />
          <span>Health & Beauty</span>
        </div>
        <div className="tab-block">
          <img src={images["trolley.svg"]} />
          <span>Travel</span>
        </div>

        <div className="tab-block">
          <img src={images["bowl.svg"]} />
          <span>Dining</span>
        </div>
        <div className="tab-block">
          <img src={images["mobile.svg"]} />
          <span>Mobile & Electronics</span>
        </div>
        <div className="tab-block">
          <img src={images["popBucket.svg"]} />
          <span>Entertainment</span>
        </div>

        <div className="tab-block">
          <img src={images["lamp.svg"]} />
          <span>Home & Lifestyle</span>
        </div>
        <div className="tab-block">
          <img src={images["dealGift.svg"]} />
          <span>Gifting</span>
        </div>
      </div>
    
      <div className="swp">
        <Swiper spaceBetween={10} slidesPerView={4} navigation>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.DealCard()}</SwiperSlide>
        </Swiper>
      </div>
      <div className="top-view mt-5 ">
        <span>Top Categories</span>
        <button>View All</button>
      </div>
      <div className="swp mb-3">
        <Swiper spaceBetween={10} slidesPerView={6.8} navigation>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
          <SwiperSlide>{commonComponets.CatergoryCard()}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
  };
};
export default connect(mapStateToProps, null)(Deals);
