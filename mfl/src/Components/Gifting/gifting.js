import React from "react";
import { commonComponets } from "../Common/commonComponent";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";
import { commonServices } from "../../Utility/common.services";

function Gifting(){
     const images = commonServices.importImage(
        require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
      );
      return(
        <div>

        </div>
      )
}
export default Gifting();