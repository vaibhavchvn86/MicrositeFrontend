import React, { useState } from "react";
import { commonServices } from "../../../Utility/common.services";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardDetails from "../../Common/commonSwiper";
import Modal from "react-bootstrap/Modal";
import { commonComponets } from "../../Common/commonComponent";

function ProductDetails() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  const [show, setShow] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <div className="container_grey">
        <div className="container">
          <div className="breadCrumbs"></div>
          <div className="product-preview_wrap">
            <div className="row">
              <div className="col-5">
                <div className="preview_box">
                  <div className="vertical_swpr">
                    <Swiper
                      spaceBetween={22}
                      slidesPerView={4}
                      direction={"vertical"}
                      // pagination={({ dynamicBullets: true }, { clickable: true })}
                      modules={[Navigation]}
                      navigation={true}
                    >
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sml-img">
                          <img src={images["smlImages.png"]} />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="imageBox">
                    <img src={images["purchaseImg.svg"]} />
                  </div>
                </div>
              </div>

              <div className="col-7">
                <div className="productDetails_wrap">
                  <div>
                    <h3>Hooded Track Set</h3>
                  </div>
                  <span>
                    A yellow hooded cropped hoodie with yellow joggers.
                  </span>
                  <div className="price-offer_box">
                    <h3>Rs. 1,799</h3>
                    <span>(10% off)</span>
                  {commonComponets.PointBox()}
                  </div>
                  <div className="mrp_box">
                    MRP :<span> Rs.2,299</span>
                    inclusive of all taxes
                  </div>

                  <div className="available_colors">
                    <span>Available Colours</span>
                    <div className=""></div>
                  </div>

                  <div className="select-size-box">
                    <div className="name-size">
                      <h3>Select Size</h3>
                      <span>Size Guide</span>
                    </div>
                    <div className="size_box">
                      <div className="circle-div">
                        <span>XS</span>
                      </div>
                      <div className="circle-div">
                        <span>S</span>
                      </div>
                      <div className="circle-div active-bg">
                        <span>M</span>
                      </div>
                      <div className="circle-div">
                        <span>L</span>
                      </div>
                      <div className="circle-div">
                        <span>XL</span>
                      </div>
                      <div className="circle-div">
                        <span>XXL</span>
                      </div>
                      <div className="circle-div">
                        <span>3XL</span>
                      </div>
                    </div>
                  </div>
                  <div className="select-quantity">
                    <span>Select Quantity</span>
                    <div className="inc-dec-box">
                      <div
                        className="btn-inc-dec"
                        onClick={() => handleDecrease()}
                      >
                        <img src={images["minusIcon.png"]} />
                      </div>
                      <div className="count-display">{count}</div>
                      <div
                        className="btn-inc-dec inc"
                        onClick={() => handleIncrease()}
                      >
                        <img src={images["addIcon.png"]} />
                      </div>
                    </div>
                  </div>
                  <div className="btn-cart-buy">
                    <button className="addcart" onClick={handleShow}>
                      Add to Cart
                    </button>
                    <button className="buynow">Buy Now</button>
                  </div>
                  <div className="available_box">
                    <span>Available offers</span>
                    <div className="offerDetails">
                      <div className="img-offer-dtl">
                        <img src={images["tag.png"]} />
                        <span>
                          What is Lorem Ipsum Lorem Ipsum is simply 10% dummy
                          text of the printing
                        </span>
                      </div>
                      <div className="img-offer-dtl">
                      <img src={images["tag.png"]} /> 
                        <span>What is Lorem Ipsum is simply 10% dummy</span>
                      </div>
                      <div className="img-offer-dtl">
                      <img src={images["tag.png"]} />
                        <span>
                          What is Lorem Lorem Ipsum is simply 10% dummy of the
                          printing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-description">
                    <h3>Product Description</h3>
                    <span>
                      Log into your “ABC Portal” by clicking here:
                      https://customer-
                      marvelapp.com/prototype/cc467f2gg/screen/8077332578 .
                      Enter the One Time Password received on your registered
                      mobile number. Select you City and enter Access Code of
                      the voucher reward received pursuant to your eligibility
                      under the applicable promotion terms . Click on Submit to
                      proceed and avail vouchers . Click on View and Redeem to
                      see terms and conditions and steps of usage for each
                      voucher reward
                    </span>
                  </div>
                  <div className="term-condition">
                    <h3>Terms & Conditions</h3>
                    <ol>
                      <li>
                        Log into your “ABC Portal” by clicking here:
                        https://customer-
                        marvelapp.com/prototype/cc467f2gg/screen/8077332578
                      </li>
                      <li>
                        Enter the One Time Password received on your registered
                        mobile number.
                      </li>
                      <li>
                        Select you City and enter Access Code of the voucher
                        reward received pursuant to your eligibility under the
                        applicable promotion terms
                      </li>
                      <li>Click on Submit to proceed and avail vouchers </li>
                      <li>
                        Click on View and Redeem to see terms and conditions and
                        steps of usage for each voucher reward
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="similar_product mt-5">
          <div className="dashed-line"></div>
          <div className="container">
            <div className="top-view mt-5">
              <span>Similar Product</span>
            </div>
            <div className="swp mb-5 mt-3">
              <Swiper spaceBetween={10} slidesPerView={4} navigation>
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
      </div>
      <Modal className="modalCart" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="">Shopping Cart (1)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-wrap ">
            <div className="product-div ">
              <img className="img-prd" src={images["cartImg.png"]} />
              <div className="prd-descrption">
                <div className="name-dlt">
                  <h6>Hooded Track Set</h6>

                  <img src={images[""]} alt="name" />
                </div>
                <div className="price-pts">
                  <span className="spantxt">Rs. 1,799</span>
                  <div>
                  {commonComponets.PointBox()}

                  </div>
                 
                </div>
                <div className="quantity-size-wrap">
                  <div className="quantity-box">
                    <span>Select Quantity</span>
                    <div className="inc-dec-box">
                      <div
                        className="btn-inc-dec"
                        onClick={() => handleDecrease()}
                      >
                        <img src={images["minusIcon.png"]} />
                      </div>
                      <div className="count-display">{count}</div>
                      <div
                        className="btn-inc-dec inc"
                        onClick={() => handleIncrease()}
                      >
                        <img src={images["addIcon.png"]} />
                      </div>
                    </div>
                  </div>
                  <div className="size-box-div">
                    <span>Size</span>
                    <div className="size-box" onClick={() => handleDropDown()}>
                      <span>M</span>

                      <div className="clk-box">
                        <img src={images["downArrow.svg"]} />
                      </div>

                      {dropdown ? (
                        <ul className="drpdown">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" summary-box mb-5">
              <h6>Summary</h6>
              <div className="summary-details">
                <ul>
                  <li>
                    No. of Products
                    <span>1</span>
                  </li>
                  <li>
                    Total MRP
                    <span>Rs.1799</span>
                  </li>
                  <li>
                    Fees & Taxes
                    <span>Rs.100</span>
                  </li>
                  <li>
                    Total Amt.
                    <span>Rs.1800</span>
                  </li>
                </ul>
              </div>
              <div className="summary-btn-wrap">
                <button className="prcd_prcs">Proceed to Checkout</button>
                <button>Continue Shopping</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ProductDetails;
