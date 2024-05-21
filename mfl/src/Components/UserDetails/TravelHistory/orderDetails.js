import React, { useState } from "react";
import "../_userDetails.scss";
import { commonComponets } from "../../Common/commonComponent";

import Modal from "react-bootstrap/Modal";
import { commonServices } from "../../../Utility/common.services";

function OrderDetails() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [trackModal, setTrackModal] = useState(false);
  const [cancelOrder, setcancelOrder] = useState(false);
  const handleTrackModal = () => {
    setTrackModal(!trackModal);
  };
  const handleCancelModal = () => {
    setcancelOrder(!cancelOrder);
  };

  return (
    <div className="orderDetails_wrap">
      <div className="row">
        <div className="col-md-8">
          <div className="order_details-history content-box">
            <div className="order-tag">
              <h4>Order Details</h4>
              <span>Upcoming</span>
            </div>
            <div className="order-date-id row">
              <div className=" col-sm-4">
                <div className="order-date-id-details">
                  <label>Order ID</label>
                  <span>PHE738649000IDB</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="order-date-id-details">
                  <label>Order Date</label>
                  <span>PHE738649000IDB</span>
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="order-date-id-details">
                  <label>Expected Delivery By</label>
                  <span>PHE738649000IDB</span>
                </div>
              </div>
            </div>
            <div className="shiping_address">
              <h4>Shipping Address</h4>
              <div className="address-details-ord">
                <div className="name-number">
                  <span>Naveed Kumar</span>
                  <p>+91 98987474773</p>
                </div>
                <div className="address-shipment">
                  <p>
                    3rd Floor, Palm Court,1 MG Road, Sector 14, Gurgaon ,
                    Haryana 122007
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="list-order content-box">
            <h4>Order Details</h4>
            <div className=" tag-list row">
              <div className="col-sm-8">Product</div>
              <div className="col-sm-2">Price</div>
              <div className="col-sm-2">Item Status</div>
            </div>
            <div className="info-order-box ">
              <div className="row">
                <div className="col-sm-8">
                  <div className="img-size-quant">
                    <img src={images["mobile.svg"]} alt="img" />

                    <div className="details-product">
                      <h4>Wrogn</h4>
                      <p>Men Blue Check Shirt Reg...</p>
                      <div className="span-wrap">
                        <span>Size:M</span>
                        <span>Color:Blue</span>
                        <span>Qty:1</span>
                      </div>
                      {commonComponets.PointBox()}
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="price_box">
                    <span>Rs.1800</span>
                  </div>
                </div>
                <div className="col-sm-2 ">
                  <div className="tag-view ">
                    <span>Upcoming</span>
                  </div>
                </div>
              </div>
              <div className="btn-items">
                <div className="row">
                  <div className="col-sm-6">
                    <button onClick={handleTrackModal}>Track Items</button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="cancel-items"
                      onClick={handleCancelModal}
                    >
                      Cancel Items
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-order-box ">
              <div className="row">
                <div className="col-sm-8">
                  <div className="img-size-quant">
                    <img src={images["mobile.svg"]} alt="img" />

                    <div className="details-product">
                      <h4>Wrogn</h4>
                      <p>Men Blue Check Shirt Reg...</p>
                      <div className="span-wrap">
                        <span>Size:M</span>
                        <span>Color:Blue</span>
                        <span>Qty:1</span>
                      </div>
                      {commonComponets.PointBox()}
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="price_box">
                    <span>Rs.1800</span>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="tag-view">
                    <span className="delivered">Delivered</span>
                  </div>
                </div>
              </div>
              <div className="btn-items">
                <div className="row">
                  <div className="col-sm-6">
                    <button onClick={handleTrackModal}>Track Items</button>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="cancel-items"
                      onClick={handleCancelModal}
                    >
                      Cancel Items
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="travelDetails_wrap">
            <div className="order-summaryTravel content-box">
              <h4>Order Summary</h4>
              <ul>
                <li>
                  Total Products
                  <span> 3</span>
                </li>
                <li>
                  Total Amt.
                  <span> ₹5000</span>
                </li>
                <li>
                  Discount
                  <span className="greenspan"> ₹352</span>
                </li>
              </ul>
              <ul className="ul_li-box-travel cancelview">
                <li className="boldli">
                  Paid Amt
                  <lable> ₹14,352</lable>
                </li>
                <li>
                  Points Redeemed
                  <span> ₹14,352</span>
                </li>
                <li>
                  Points Earned
                  <span className="greenspan "> 352</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-summary-cancel-btn content-box">
            <span>Your Order is confirmed !</span>
            <button>Cancel Order</button>
          </div>
        </div>
      </div>
      <Modal
        className="trackModal_wrap"
        show={trackModal}
        onHide={handleTrackModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="trackModal_content_wrap px-4">
            <h4>Track Item</h4>
            <div className="delivery-details">
              <div className="row">
                <div className="col-sm-4 p-0">
                  <div className="lable-span">
                    <label>Courier Service :</label> <span>Blue Dart</span>
                  </div>
                </div>
                <div className="col-sm-4 p-0">
                  <div className="lable-span">
                    <label>Estimated Delivery Date :</label>{" "}
                    <span>05-Aug-2022</span>
                  </div>
                </div>
                <div className="col-sm-4 p-0">
                  <div className="lable-span">
                    <label>Tracking ID :</label> <span>PHE738649000IDB</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-view-track">
              <div className="img-size-quant-modal">
                <img src={images["mobile.svg"]} alt="img" />

                <div className="details-product">
                  <h4>Wrogn</h4>
                  <p>Men Blue Check Shirt Reg...</p>
                  <div className="span-wrap">
                    <span>Size:M</span>
                    <span>Color:Blue</span>
                    <span>Qty:1</span>
                  </div>
                  {commonComponets.PointBox()}
                </div>
              </div>
            </div>
            <div className="order-track-view row">
              <div className="col-3 p-0">
                <div className="view-box-track">
                  <div className="radio-dashed">
                    {/* <input type="radio" /> */}
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div className="dashed"></div>
                  </div>
                  <span>Order Place</span>
                  <p>Tuesday, 30-May-2022</p>
                </div>
              </div>
              <div className="col-3 p-0">
                <div className="view-box-track">
                  <div className="radio-dashed">
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div className="dashed"></div>
                  </div>
                  <span>Order Place</span>
                  <p>Tuesday, 30-May-2022</p>
                </div>
              </div>
              <div className="col-3 p-0">
                <div className="view-box-track">
                  <div className="radio-dashed">
                    <div className="outer-circle">
                      <div className="inner-circle"></div>
                    </div>
                    <div className="dashed"></div>
                  </div>
                  <span>Order Place</span>
                  <p>Tuesday, 30-May-2022</p>
                </div>
              </div>
              <div className="col-3 p-0">
                <div className="view-box-track">
                  <div className="radio-dashed">
                    <div className="outer-circle active-outr">
                      <div className="inner-circle active-bg"></div>
                    </div>
                    <div className="dashed brd"></div>
                  </div>
                  <span className="active">Order Place</span>
                  <p className="active">Tuesday, 30-May-2022</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="trackModal_wrap"
        show={cancelOrder}
        onHide={handleCancelModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="trackModal_content_wrap cancelModal-wrap ">
            <h4>Cancel Item</h4>
            <span>Are you sure you want to cancel this item?</span>
            <div className="">
              <div className="product-view-track  ">
                <div className="img-size-quant-modal">
                  <img src={images[""]} alt="img" />

                  <div className="details-product">
                    <h4>Wrogn</h4>
                    <p>Men Blue Check Shirt Reg...</p>
                    <div className="span-wrap">
                      <span>Size:M</span>
                      <span>Color:Blue</span>
                      <span>Qty:1</span>
                    </div>
                    {commonComponets.PointBox()}
                  </div>
                </div>
              </div>
              {/* <div className="w-100">
                {commonComponets.SingleDropDown()}
                need to how to show single dropdown

              </div> */}
              <div className="btn-cancel-order">
                <button>Don't Cancel</button>
                <button className="cancelbtn" onClick={handleCancelModal}>
                  Cancel Item
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default OrderDetails;
