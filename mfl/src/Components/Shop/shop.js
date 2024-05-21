import React, { useEffect, useState } from "react";
import { commonServices } from "../../Utility/common.services";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import CardDetails from "../Common/commonSwiper";
import "./_shop.scss";
import { commonComponets } from "../Common/commonComponent";
import { connect } from "react-redux";
SwiperCore.use(Navigation);


function Shop(props) {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [slidePerview, setSlidePerview] = useState(window.innerWidth < 540 ? 1.5 : window.innerWidth < 720 ? 2.8 : window.innerWidth < 960 ? 3.5 : 3.8);

  const setDimension = () => {
    let screenSize = window.innerWidth
    setSlidePerview(screenSize < 540 ? 1.5 : screenSize < 720 ? 2.8 : screenSize < 960 ? 3.5 : 3.8)
  }

  useEffect(() => {
    setDimension()
  }, [props.screenSize])
  return (
    <>
      <div className="main_container">

        <div className="container">
          <div className="breadcrumbs"></div>
          <div className="top-view">
            <span>Top Sellers</span>
            <button>View All</button>
          </div>
          <div className="swp">
            <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
              <SwiperSlide>
                <img src={images["accessories.svg"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["womenwear.svg"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["jewellery.svg"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["personalcare.svg"]} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-view mt-5 ">
            <span>Top Deal</span>
            <button>View All</button>
          </div>
          <div className="swp mb-5">
            <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
              <SwiperSlide>
                <img src={images["topD_01.png"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["topD_02.png"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["topD_03.png"]} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={images["topD_03.png"]} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-view mt-5">
            <span>Categories</span>
            <button>View All</button>
          </div>
          <div className="catogories">
            <div className="row mb-5">
              <div className="col-4">
                <img src={images["health_drink_icon.svg"]} />
              </div>
              <div className="col-4">
                <img src={images["suiting_icon.svg"]} />
              </div>
              <div className="col-4">
                <img src={images["fashion_glass_icon.svg"]} />
              </div>
            </div>
          </div>
          <div className="top-view mt-5">
            <span>Womenswear</span>
            <button>View All</button>
          </div>
          <div className="swp mb-5 mt-3">
            <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-view mt-5">
            <span>Kidswear</span>
            <button>View All</button>
          </div>
          <div className="swp mb-5 mt-3">
            <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-view mt-5">
            <span>Menswear</span>
            <button>View All</button>
          </div>
          <div className="swp mb-5 mt-3">
            <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
              <SwiperSlide>
                <CardDetails />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    screenSize: state.screenSize
  }
}
export default connect(mapStateToProps, null)(Shop);