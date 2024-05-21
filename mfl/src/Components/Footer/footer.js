import React, { Component, useState } from "react";
import "./_footer.scss";
import { commonServices } from "../../Utility/common.services";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

function Footer(props) {
  const images = commonServices.importImage(
    require.context("../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [screnS, setScrenS] = useState(window.innerWidth);

  const [showHumburger, setShowHumburger] = useState(false)
  const openHumburger = () => {
    setShowHumburger(!showHumburger)
  }
  const outSideClick = () => {
    setShowHumburger(false)
  }
  return (
    <div className="footer_mainDiv">
      {props.screenSize <= 735 ?
        <div className="mobile_footer row">
          {/* <div className="optionTab col-9">
            <Link className="option_div" to="/deals">Deal</Link>
            <Link className="option_div" to="/shop">Shop</Link>
            <Link className="option_div" to="/">Gifting</Link>
          </div> */}
          <div className="options_div">
            <div className="footer_options">
              <img src={images['searchIcon.svg']} alt="" />
              <label>Profile</label>
            </div>
            <div className="footer_options">
              <img src={images['searchIcon.svg']} alt="" />
              <label>Offer</label>
            </div>
            <div className="footer_options">
              <img src={images['searchIcon.svg']} alt="" />
              <label>Deals</label>
            </div>
            <div className="footer_options" onClick={openHumburger}>
              <img src={images['searchIcon.svg']} alt="" />
              <label>More</label>
            </div>
          </div>
          {showHumburger &&
            <OutsideClickHandler
              onOutsideClick={outSideClick}
            >
              < div className="menu_content_wrap row">
                <div className="icon_wrap col-3" >
                  <div className="change_store" >
                    <img src={images['searchIcon.svg']} alt="videoSlot" />
                  </div>
                  <p>Test</p>
                </div>
                <div className="icon_wrap col-3" >
                  <div className="change_mobile" >
                    <img src={images['searchIcon.svg']} alt="videoSlot" />
                  </div>
                  <p>Test</p>
                </div>
                <div className="icon_wrap col-3" >
                  <div className="videoSlot" >
                    <img src={images['searchIcon.svg']} alt="videoSlot" />
                  </div>
                  <p>Test</p>
                </div>

              </div>
            </OutsideClickHandler>
          }
        </div>
        :
        <React.Fragment>
          <div className="footer-top">
            <div className={props.screenSize <= 991 ? "ul-li-wrap py-5 px-3" : "ul-li-wrap py-5 container"}>
              <div className="row m-0">
                <div className="col-3">
                  <ul>
                    <li>Top Categories</li>
                    <li>Makeup</li>
                    <li>Skin</li>
                    <li>Hair</li>
                    <li>Personal Care</li>
                    <li>Appliances</li>
                    <li>Wellness</li>
                    <li>Fragrance</li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li>Quick Links</li>
                    <li>Offer Zone</li>
                    <li>New Launches</li>
                    <li>TRC PRO</li>
                    <li>TRC Launches</li>
                    <li>Site Map</li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li>Help</li>
                    <li>Contact Us</li>
                    <li>FAQ`s</li>
                    <li>Cancellation & Return</li>
                    <li>Press</li>
                    <li>Testimonials</li>
                    <li>Responsible Disclosure</li>
                  </ul>
                </div>
                <div className="col-3">
                  <ul>
                    <li>About Us</li>
                    <li>Who are we?</li>
                    <li>Careers</li>
                    <li>Authenticity</li>
                    <li>Press</li>
                    <li>Testimonials</li>
                    <li>Responsible Disclosure</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dashed-line"></div>

            <div className={props.screenSize <= 991 ? "shiping-social_box py-5 px-3" : "shiping-social_box py-5 container"}>
              <div className="shiping_wrap">
                <div className="service-box">
                  <img
                    src={images["cartIcon.svg"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="txt-box">
                    <span>Free Shipping</span>
                    <p>for orders above `1499</p>
                  </div>
                </div>
                <div className="service-box">
                  <img
                    src={images["cartIcon.svg"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="txt-box">
                    <span>Easy Returns</span>
                    <p>15 day easy returns for most products</p>
                  </div>
                </div>
                <div className="service-box">
                  <img
                    src={images["cartIcon.svg"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="txt-box">
                    <span>Authentic Products</span>
                    <p>15 day easy returns for most products</p>
                  </div>
                </div>
                <div className="service-box">
                  <img
                    src={images["cartIcon.svg"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="txt-box">
                    <span>2400+ Brands</span>
                    <p>Well Curated 1.9 Lakh + product</p>
                  </div>
                </div>
              </div>
              <div className="social_box ">
                <span>
                  Show us some love on <br></br>
                </span>
                <p> social media</p>
                <div className="img-box-social">
                  <img
                    src={images["instagram_icon.png"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src={images["facebook_icon.png"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src={images["twitter_icon.png"]}
                    alt="img"
                    className="img-fluid"
                  />
                  <img
                    src={images["youtube_icon.png"]}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom px-3 py-2">
            <div className="term-policy-wrap">
              <span>Term of Use</span>
              <span>Shipping Policy</span>
              <span>Cancellation Policy</span>
              <span>Privacy Policy</span>
            </div>
            <div className="icons_wrap">
              <img src={images["cartIcon.svg"]} alt="img" className="img-fluid" />
              <img src={images["cartIcon.svg"]} alt="img" className="img-fluid" />
              <img src={images["cartIcon.svg"]} alt="img" className="img-fluid" />
              <img src={images["cartIcon.svg"]} alt="img" className="img-fluid" />
            </div>
          </div>
        </React.Fragment>
      }
    </div >

  );
}
const mapStateToProps = state => {
  return {
    screenSize: state.screenSize
  }
}

export default connect(mapStateToProps, null)(Footer);

