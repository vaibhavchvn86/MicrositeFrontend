import React, { useState } from "react";
import "../_userDetails.scss";
import { commonServices } from "../../../Utility/common.services";
import { commonComponets } from "../../Common/commonComponent";
import Modal from "react-bootstrap/Modal";

function ProfileDashboard() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [editModal, setEditModal] = useState(false);
  const [addeditModal, setaddEditModal] = useState(false);
  const handleEditModal = () => {
    setEditModal(!editModal);
  };
  const handleAddressEditModal = () => {
    setaddEditModal(!addeditModal);
  };
  return (
    <div className="profile_detail">
      <div className="mb-3">
        <div className="circle-name-box">
          <div className="oval">
            <div className="circle-name">
              <span>SK</span>
            </div>
          </div>
          <div className="name-details-pr">
            <h3>Hi Shivani</h3>
            <span>Corporate Member</span>
          </div>
        </div>
      </div>
      <div className="detail_card content-box">
        <div className="prf-btn">
          <span>Profile Details</span>
          <button onClick={handleEditModal}>Edit</button>
        </div>
        <div className="ul-li-box">
          <ul>
            <li>
              <h4>Full Name</h4>
              <label>Shivani Khandelwal</label>
            </li>
            <li>
              <h4>Mobile Number</h4>
              <label>
                8585901076l <img src={images[""]} alt="img" />
              </label>
            </li>
            <li>
              <h4>Anniversary Date</h4>
              <label>—</label>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Email Id</h4>
              <label>
                shivani.khandelwal2007@gmail.com <span>Verify Now</span>
              </label>
            </li>
            <li>
              <h4>Gender</h4>
              <label>Female</label>
            </li>
          </ul>
          <ul>
            <li>
              <h4>Date of Birth</h4>
              <label>—</label>
            </li>
            <li>
              <h4>Marital Status</h4>
              <label>Single</label>
            </li>
          </ul>
        </div>
        {/* <div className="row mt-3 ">
          <div className="col-4">
            <div className="ul-li-box">
              <ul className="d-flex">
                <li>Full Name</li>
                <li>Shivani Khandelwal</li>
              </ul>
              <ul>
                <li>Mobile Number</li>
                <li>
                  8585901076l <img src={images[""]} alt="img" />
                </li>
              </ul>
              <ul>
                <li>Anniversary Date</li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-6">
            <div className="ul-li-box">
              <ul>
                <li>Email Id</li>
                <li>
                  shivani.khandelwal2007@gmail.com <span>Verify Now</span>
                </li>
              </ul>
              <ul>
                <li>Gender</li>
                <li>Female</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="ul-li-box">
              <ul>
                <li>Date of Birth</li>
                <li></li>
              </ul>
              <ul>
                <li>Marital Status</li>
                <li>Single</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="detail_card content-box mt-3">
        <div className="prf-btn">
          <span>Address</span>
          <button onClick={handleAddressEditModal}>+ Add new Address</button>
        </div>
        <div className="row ">
          <div className="col-sm-6 mt-3 ">
            <div className="address-box">
              <div className="name-default">
                <div className="name-mobile">
                  <span>Shivani Khandelwal</span>
                  <p>+918585901056 / Home</p>
                </div>
                <div className="img-tag">
                  <img src={images[""]} alt="img" />
                  <span>Default</span>
                </div>
              </div>
              <div className="cmplt-address">
                <p>75/B, Green Meadows , Juhu Linking Road,</p>
                <p> Nr. ISCON Temple</p>
                <p> Vile Parle (W) </p>
                <p> Mumbai ,Maharashtra</p>
                <p> India</p>
                <p>400003</p>
              </div>
            </div>
            <div className="btn-box-adr">
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="address-box grey-brd">
              <div className="name-default">
                <div className="name-mobile">
                  <span>Shivani Khandelwal</span>
                  <p>+918585901056 / Home</p>
                </div>
                <div className="img-tag">
                  <p>Set as Default</p>
                </div>
              </div>
              <div className="cmplt-address">
                <p>75/B, Green Meadows , Juhu Linking Road,</p>
                <p> Nr. ISCON Temple</p>
                <p> Vile Parle (W) </p>
                <p> Mumbai ,Maharashtra</p>
                <p> India</p>
                <p>400003</p>
              </div>
            </div>
            <div className="btn-box-adr ">
              <button className="grey-brd">Edit</button>
              <button className="grey-brd">Remove</button>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="address-box grey-brd">
              <div className="name-default">
                <div className="name-mobile">
                  <span>Shivani Khandelwal</span>
                  <p>+918585901056 / Home</p>
                </div>
                <div className="img-tag">
                  <p>Set as Default</p>
                </div>
              </div>
              <div className="cmplt-address">
                <p>75/B, Green Meadows , Juhu Linking Road,</p>
                <p> Nr. ISCON Temple</p>
                <p> Vile Parle (W) </p>
                <p> Mumbai ,Maharashtra</p>
                <p> India</p>
                <p>400003</p>
              </div>
            </div>
            <div className="btn-box-adr ">
              <button className="grey-brd">Edit</button>
              <button className="grey-brd">Remove</button>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="address-box grey-brd">
              <div className="name-default">
                <div className="name-mobile">
                  <span>Shivani Khandelwal</span>
                  <p>+918585901056 / Home</p>
                </div>
                <div className="img-tag">
                  <p>Set as Default</p>
                </div>
              </div>
              <div className="cmplt-address">
                <p>75/B, Green Meadows , Juhu Linking Road,</p>
                <p> Nr. ISCON Temple</p>
                <p> Vile Parle (W) </p>
                <p> Mumbai ,Maharashtra</p>
                <p> India</p>
                <p>400003</p>
              </div>
            </div>
            <div className="btn-box-adr ">
              <button className="grey-brd">Edit</button>
              <button className="grey-brd">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="editModal_wrap"
        show={editModal}
        onHide={handleEditModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edit_wrap">
            <h4>Profile Details</h4>
            <div className="row ">
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">First Name</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Last Name</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Phone Number</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Email Address</label>
                  {/* <img src={images[""] } alt="name"/> */}
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Gender</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Birthday</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Marital status</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Anniversary</label>
                </div>
              </div>
            </div>
         
           
            <button className="my-4">Update</button>
          </div>
        </Modal.Body>
      </Modal>
      {/* AddressEdit */}
      <Modal
        className="editModal_wrap"
        show={addeditModal}
        onHide={handleAddressEditModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edit_wrap ">
            <h4>Address Details</h4>
            <div className="row ">
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Pincode</label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Address(Area & Street)</label>
                </div>
              </div>
            </div>
            <div className="row  ">
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">City/District/Town</label>
                </div>
              </div>
              <div className="col-sm-6 mt-3">{commonComponets.SingleDropDown()}</div>
              <div className="col-sm-6 mt-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Landmark</label>
                  <div className="optionalSpan">
                    <span>(Optional)</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mt-3 mb-3">
                <div class="with_label_input">
                  <input
                    id="txt"
                    type="text"
                    name="text_test?"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                  />
                  <label class="form__label">Alternate Phone(Optional)</label>
                </div>
              </div>
            </div>

            <div className="select-address mb-4">
              <span>Type Of Address :</span>
              <div className="inp_lable">
                <input type="radio" name="address" />
                <lable>Home</lable>
              </div>
              <div className="inp_lable">
                <input type="radio" name="address" />
                <lable>Office</lable>
              </div>
              <div className="inp_lable">
                <input type="radio" name="address" />
                <lable>Other</lable>
              </div>
            </div>
            <div className="checked-box_address mb-4">
              <input name="checkme" id="checkme" type="checkbox" />
              <lable htmlFor="checkme" >Make this as my default address</lable>
            </div>
            <button className="mb-4">Update</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default ProfileDashboard;
