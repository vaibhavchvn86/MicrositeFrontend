import React, { useState } from "react";
import { commonServices } from "../../../Utility/common.services";

function AddressDetails() {
  const [count, setCount] = useState();
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="container_grey">
      <div className="container  ">
        <div className="content-box-address">
          <h4>Address Details</h4>
          <div className="row ">
            <div className="col-8 mt-4 ">
              <div className="main-container ">
                <h4 className="smlh">Shipping Address</h4>
                <div className="confirmation_div">
                  <div className="msg-img">
                    <img src={images["deleteIcon.svg"]} alt="bame" />
                    <div className="h-span">
                      <h4>
                        Your order has been placed and is being processed!
                      </h4>
                      <span>
                        The required details has been sent to your registered
                        email id
                      </span>
                    </div>
                  </div>
                  <div className="Order-delivery ">
                    <div className="row">
                      <div className="col-4">
                        <div className="order-Id-dilevery">
                          <span>OrderId</span>
                          <p>PRO000091234PRO</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="order-Id-dilevery">
                          <span>Order Date </span>
                          <p>30-May-2022</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="order-Id-dilevery">
                          <span>Expected Delivery Date </span>
                          <p>05-Jun-2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="addressDetails ">
                  <div className="container_grey border ps-5 pd-div">
                    <div className="row ">
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Name"
                          />
                          <label for="Name" class="label">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-5">
                        {/* <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Last Name"
                          />
                          <label for="Last Name" class="label">
                            Last Name
                          </label>
                        </div> */}
                        <div className="with_label_input">
                            <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                            <label className="form__label">From</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Email"
                          />
                          <label for="Email" class="label">
                            Email ID
                          </label>
                        </div>
                      </div>
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Mobile"
                          />
                          <label for="Mobile" class="label">
                            Mobile Number
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container_grey  border mt-3 ps-5 pd-div ">
                    <div className="row ">
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Pincode"
                          />
                          <label for="Pincode" class="label">
                            Pincode
                          </label>
                        </div>
                      </div>
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="State"
                          />
                          <label for="State" class="label">
                            State
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-10">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="AddressName"
                          />
                          <label for="AddressName" class="label">
                            Address (House No, Street, Area)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="Town"
                          />
                          <label for="Town" class="label">
                            Locality/Town
                          </label>
                        </div>
                      </div>
                      <div className="col-5">
                        <div class="input-group">
                          <input
                            type="text"
                            class="input-area"
                            required
                            id="District"
                          />
                          <label for="District" class="label">
                            City/District
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="address-check-box">
                    <span>Type of Address :</span>
                    <div className="check-box-div">
                      <div className="chck-wrap">
                        <input name="select" type="radio" id="radio" />
                        <span className="activecls">Home</span>
                      </div>
                      <div className="chck-wrap">
                        <input name="select" type="radio" id="radio" />
                        <span>Office</span>
                      </div>
                      <div className="chck-wrap">
                        <input name="select" type="radio" id="radio" />
                        <span>Other</span>
                      </div>
                    </div>
                  </div>
                  <div className="term_condition mb-5">
                    <input type="checkbox" />
                    <span>
                      I agree with <a>terms and conditions</a>
                    </span>
                  </div>
                </div>
                <div className="review_order">
                  {/* <div className="heading-img">
                    <img src={images[""]} />
                    <h4>Review Order</h4>
                  </div> */}
                  <div className="review-details">
                    <div className="addressdetailsReview active">
                      <input type="radio" name="select" id="radio" />
                      <div className="customer-details">
                        <div className="name-action">
                          <div className="name-details">
                            <h5>Naveed Kumar</h5>
                            <span className="boxspan">Home</span>
                            <span>+91 9911292261</span>
                          </div>
                          <div className="action">
                            <img src={images["editIcon.svg"]} />
                            <img src={images["deleteIcon.svg"]} />
                          </div>
                        </div>
                        <div className="ord-address-box">
                          <span> 3rd Floor, Palm Court, 1 MG Road,</span>
                          <br></br>
                          <span>Sector 14, Gurgaon, Haryana 122007</span>
                        </div>
                      </div>
                    </div>
                    <div className="addressdetailsReview  ">
                      <input type="radio" />
                      <div className="customer-details">
                        <div className="name-action">
                          <div className="name-details">
                            <h5>Naveed Kumar</h5>
                            <span className="boxspan">Other</span>
                            <span>+91 9911292261</span>
                          </div>
                          <div className="action">
                            <img src={images["editIcon.svg"]} />
                            <img src={images["deleteIcon.svg"]} />
                          </div>
                        </div>
                        <div className="ord-address-box">
                          <span> 3rd Floor, Palm Court, 1 MG Road,</span>
                          <br></br>
                          <span>Sector 14, Gurgaon, Haryana 122007</span>
                        </div>
                      </div>
                    </div>
                    <button>+ Add a new address</button>
                    <div className="dashedline"></div>
                    <div className="order-details-wrap">
                      <h4>Order Details</h4>
                      <div className="order-details">
                        <div className="row">
                          <div className="col-6">
                            <span>Product</span>
                          </div>
                          <div className="col-3">
                            <span>Quantity</span>
                          </div>
                          <div className="col-3">
                            <span>Offer Price</span>
                          </div>
                        </div>
                        <div className=" purchase-details">
                          <div className="row">
                            <div className="col-6">
                              <div className="purchase-descrip">
                                <div>
                                  <img src={images["buyIcon.svg"]} />
                                </div>
                                <div className="items-details">
                                  <div className="h-span">
                                    <h6>Zara</h6>
                                    <p>
                                      Hooded Track Set vbjhvhjvj h hvuyvuyg
                                      huvuyguy hvuyguyg hbvyg8ygyg jh hj ug
                                    </p>
                                  </div>
                                  <div className="size-color">
                                    <span>Size: M</span>
                                    <span>Color: Pink</span>
                                  </div>
                                  <div className="shipingBox">
                                    Shipping Charges: <span>Rs.60</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="count">
                                <span>1</span>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="count">
                                <span className="spanPrice">Rs. 1,799</span>
                                <div class="point_box">
                                  <img src="" />
                                  <span>50 Pts</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-4 ">
              <div className="main-container order_summary ">
                <h4>Order Summary</h4>
                <ul>
                  <li>
                    Total Products
                    <span>1</span>
                  </li>
                  <li>
                    Total Amt
                    <span>RS.1799</span>
                  </li>
                  <li>
                    Fees & Taxes
                    <span>Rs.100</span>
                  </li>
                  <li>
                    Shipping Charges
                    <span>RS.20</span>
                  </li>
                  <li>
                    Total Products
                    <span>1</span>
                  </li>
                </ul>
                <ul className="ul-box">
                  <li>
                    Payable Amt
                    <span>Rs. 1,919</span>
                  </li>
                  <li>
                    Required Points
                    <span>3,838 pts.</span>
                  </li>
                </ul>
                <div className="order-btn-div">
                  <button className="prcd_prcs">Proceed to Payment</button>
                  <button>Continue Shopping</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddressDetails;
