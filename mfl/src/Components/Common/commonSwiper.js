import React from "react";
import { commonServices } from "../../Utility/common.services";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./_common.scss";
SwiperCore.use(Navigation);

function CardDetails() {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="card_wrap">
      <div className="swiper-box">
        <div className="swiper-img">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={({ dynamicBullets: true }, { clickable: true })}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src={images["topD_01.png"]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images["topD_01.png"]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images["topD_01.png"]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images["topD_01.png"]} />
            </SwiperSlide>
          </Swiper>
          <div className="points-rect">
            <img src={images[""]} />
            <span>20 Pts.</span>
          </div>
          <div className="whislist-icon">
            <img src={images["wishList.svg"]} />
          </div>
        </div>
      </div>
      <div className="box-details">
        <div className="color-picker">
          <span className="span">h</span>
        </div>
        <div className="name-cloth">
          <span>Hooded Track Set</span>
          <p>Women’s white chanderi silk embroidery se….</p>
          <div className="price-offer mt-1">
            <span>Rs.799</span>
            <span className="cutprice">Rs.1299</span>
            <span className="offer">10% off</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardDetails;
