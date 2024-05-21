import React, { useState } from "react";
import "../_userDetails.scss";

import Modal from "react-bootstrap/Modal";
import { commonServices } from "../../../Utility/common.services";

function TravelDetails() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [modalshowCancel, setmodalshowCancel] = useState(false);
  const handleCancelModal = () => {
    setmodalshowCancel(!modalshowCancel);
  };
  return (
    <div className="travelDetails_wrap ">
      <div className="row">
        <div className="col-md-8">
          <div className="flight-details content-box">
            <div className="flight-tag">
              <h4>Flights</h4>
              <span>Upcoming</span>
            </div>
            <div className="dateOrder">
              <div className="dateorder_details">
                <span>Order Id</span>
                <p>PHE738649000IDB</p>
              </div>
              <div className="dateorder_details">
                <span>Booking Date</span>
                <p>PHE738649000IDB</p>
              </div>
            </div>
            <div className="pnr-wrap">
              <h4>PNR - ABCDE1</h4>
              <div className="img-flightName">
                <img src={images["mobile.svg"]} alt="flight" />
                <div className="flightName">
                  <h4>IndiGo</h4>
                  <span>Ind - 098</span>
                </div>
              </div>
              <div className="flight-detail-wrap row">
                <div className="flight-duration-details col-4">
                  <span>New Delhi (DEL)</span>
                  <p>08:05</p>
                  <p className="date">Fri, 10 Nov 2020</p>
                  <p className="airport">Chhatrapati Shivaji International…</p>
                </div>
                <div className="duration-details col-4">
                  <span>Non Stop</span>
                  <p>2hr 10min</p>
                </div>
                <div className="flight-duration-details col-4">
                  <span>New Delhi (DEL)</span>
                  <p>08:05</p>
                  <p className="date">Fri, 10 Nov 2020</p>
                  <p className="airport">Chhatrapati Shivaji International…</p>
                </div>
              </div>
            </div>
            <div className="refund-class-baggage">
              <span>Refundable</span>
              <div className="span-img-wrap">
                <div className="img-text">
                  <img src={images["flight_h.svg"]} />
                  <span>Economy</span>
                </div>
                <div className="img-text">
                  <img src={images["bag_h.svg"]} />
                  <span>Checkin Baggage: 15 Kgs</span>
                </div>
                <div className="img-text">
                  <img src={images["bag_Ladies.svg"]} />
                  <span>Hand Baggage: N.A</span>
                </div>
              </div>
            </div>
          </div>
          <div className="btnwrap-details">
            <button>Download Ticket</button>
            <button onClick={handleCancelModal}>Cancel Flight</button>
            <button>Re-schedule</button>
          </div>
          <div className="travel-tables content-box">
            <h4>Travel Details</h4>
            <div className="category-table-box">
              <span>Adult(2)</span>
              <div className="table_content">
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Full Name</th>
                    <th>DOB</th>
                    <th>Passport No</th>
                    <th>Expiry Date</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mr Satyam Tiwari</td>
                      <td>27-02-97</td>
                      <td>12345666</td>
                      <td>22/2/2303</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mr Satyam Tiwari</td>
                      <td>27-02-97</td>
                      <td>12345666</td>
                      <td>22/2/2303</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="category-table-box">
              <span>Child/Infant(2)</span>
              <div className="table_content">
                <table>
                  <thead>
                    <th>S.No</th>
                    <th>Full Name</th>
                    <th>DOB</th>
                    <th>Passport No</th>
                    <th>Expiry Date</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mr Satyam Tiwari</td>
                      <td>27-02-97</td>
                      <td>12345666</td>
                      <td>22/2/2303</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mr Satyam Tiwari</td>
                      <td>27-02-97</td>
                      <td>12345666</td>
                      <td>22/2/2303</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="order-details content-box">
            <h4>Contact Details</h4>
            <ul>
              <li>
                Email ID:
                <span>sanjana@email.com</span>
              </li>
              <li>
                Phone No :<span>9898989898 </span>
              </li>
            </ul>
          </div>
          <div className="important-details content-box">
            <h4>Important Details</h4>
            <p>
              — Please mention your Booking reference for all you communication
              with us related to this booking
            </p>
            <p>
              — Please mention your Booking reference for all you communication
              with us related to this booking
            </p>
            <p>
              — Please mention your Booking reference for all you communication
              with us related to this booking
            </p>
            <p>
              — Please mention your Booking reference for all you communication
              with us related to this booking
            </p>
            <p>
              — Please mention your Booking reference for all you communication
              with us related to this booking
            </p>

            <h4>Cancel and Modification</h4>
            <p>— For round-trip fares,Partial cancellation is not permitted</p>
            <p>
              {" "}
              Read <span>Terms & Conditions </span>to know more
            </p>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="order-summaryTravel content-box">
            <h4>Order Summary</h4>
            <ul>
              <li>
                Airline Base Fair
                <span> ₹14,352</span>
              </li>
              <li>
                Airline Taxes
                <span> ₹14,352</span>
              </li>
              <li>
                Ancillary Charges (Seat/Baggage/Meals)
                <span> ₹14,352</span>
              </li>
            </ul>
            <ul className="ul_li-box-travel">
              <li className="boldli">
                Total Amount
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
      </div>
      <Modal
        className="cancelModal_wrap"
        show={modalshowCancel}
        onHide={handleCancelModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cancel_content mb-4 ">
            <h4>Cancel this flight</h4>
            <p>Are you sure you want to cancel this flight ?</p>
            <div className="updatebtn-wrap">
              <button>Yes, cancel</button>
              <button
                className="cancel_btn"
                onClick={() => handleCancelModal()}
              >
                No,Don't
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default TravelDetails;
