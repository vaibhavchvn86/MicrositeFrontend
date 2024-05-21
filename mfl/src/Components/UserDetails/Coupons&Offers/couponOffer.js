import React, { useState } from "react";
import "../_userDetails.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import { commonServices } from "../../../Utility/common.services";

function CouponsOffers() {
  const images = commonServices.importImage(
    require.context("../../../Assets/Icons/", false, /\.(png|jpe?g|svg)$/)
  );
  const [modalshow, setModalshow] = useState(false);

  const handleViewModal = () => {
    setModalshow(!modalshow);
  };
  return (
    <div className="coupons_wrap ">
      <Tabs
        defaultActiveKey="myvoucher"
        transition={false}
        id="noanim-tab-example"
        className=" tabs-class"
      >
        <Tab eventKey="myvoucher" title="My Vouchers" className="">
          <div className="content_wrap">
            <Tabs
              defaultActiveKey="all"
              transition={false}
              id="noanim-tab-example"
              className=" btn_wrap_offer"
            >
              <Tab eventKey="all" title="All(4)">
                <div className="row">
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span onClick={handleViewModal}>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className="coupons_details_wrap">
                      <div className="img-brand">
                        <img src={images[""]} alt="img" />
                        <div className="text-wrap">
                          <span>Myntra</span>
                          <p>On minimum purchase of Rs.1500</p>
                        </div>
                      </div>
                      <div className="date_box">
                        <div>
                          Expiry :<span className="date">03 March 2022</span>
                          <span className="time"> 11:30:00 PM</span>
                        </div>
                        <span>View Details</span>
                      </div>
                      <div className="clipborad_box">
                        <div className="code">EKREF5368</div>
                        <div className="clip-img">
                          <img src={images[""]} alt="img" />
                          <img src={images[""]} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="active" title="Active(04)" disabled>
                h2
              </Tab>
              <Tab eventKey="expired" title="Expired(01)" disabled>
                h3
              </Tab>
            </Tabs>
          </div>
        </Tab>
        <Tab eventKey="profile" title="My Offers" disabled>
          h2
        </Tab>
        <Tab eventKey="contact" title="TRC Privilege" disabled>
          h3
        </Tab>
      </Tabs>
      <Modal
        className="viewModal_wrap"
        show={modalshow}
        onHide={handleViewModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className=""></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="viewDetailsModal ">
            <h4>Terms & Conditions</h4>
            <ol>
              <li>You will get flat 30% off on all the products on website.</li>
              <li>Valid on MRP.</li>
              <li>Maximum discount is Rs.1000.</li>
              <li>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </li>
              <li>GST extra on discounted price</li>
              <li>Coupon code is not applicable with any other coupon.</li>
              <li>
                Coupon code is not valid on Combos, Bottles & Accessories,
                Formula & Supplements, Innerwear & Thermals, Socks & Tights,
                Swimwear, Education, Bath Tubs, and brands Meemee Select Baby
                Gear Range, Duracell, Johnson’s Baby, Nestle, Protinex, Bella,
                PediaSure, Figaro, Saregama, Dabur, West Coast, Motorola,
                Melissa & Doug, Horlicks, Shemaroo, DMR MiniWash, Foscam,
                Cherokee, Hamdard, Alex Daisy, Complan, Shumee, Bio Oil, Jane,
                Masilo, Fancy Fluff, IFITech, Dettol, Shesha Naturals, Dermadew,
                Emotix, TigerTech, Vaux, Joie, SeTracker, Ryca, Pureborn, U.S.
                Polo Assn. Kids, Colt, Donut, Karigari, Savlon, Boingg, Instax
                Fujifilm, ClassMonitor, Duroflex, Bianca, Fisher Price by
                Tiffany, Alex Daisy.
              </li>
              <li>Coupon code is not applicable on Sanitizers and Masks.</li>
      
             
            </ol>
            <p> Get Flat 20% OFF on all products on abs.com</p>


          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default CouponsOffers;
