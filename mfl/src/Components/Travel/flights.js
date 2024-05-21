import React, { useEffect, useState } from "react";
import './_travel.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { commonServices } from "../../Utility/common.services";
import Filter from "../Common/filter";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { commonComponets } from "../Common/commonComponent";
import OutsideClickHandler from "react-outside-click-handler";
SwiperCore.use(Navigation);

function Flights(props) {
    const images = commonServices.importImage(require.context('../../Assets/Icons/', false, /\.(png|jpe?g|svg)$/));
    const [slidePerview, setSlidePerview] = useState(window.innerWidth < 576 ? 3.2 : window.innerWidth < 768 ? 5.5 : 6.8);
    const [showSelectTraveller, setShowSelectTraveller] = useState(false)
    useEffect(() => {
        let screenSize = props.screenSize
        setSlidePerview(screenSize < 576 ? 3.2 : screenSize < 768 ? 5.5 : 6.8)
    }, [props.screenSize])
    const handleSelectTraveller = () => {

    }
    return (
        <div className="flights_div">
            <div className="flight_search">
                <div className="trip_type">
                    <div className="selected_trip_type">
                        <input type="radio" name="trip" />
                        <label>One Way</label>
                    </div>
                    <div className="selected_trip_type">
                        <input type="radio" name="trip" />
                        <label>Round Trip</label>
                    </div>
                    <div className="selected_trip_type">
                        <input type="radio" name="trip" />
                        <label>Multi City</label>
                    </div>
                </div>
                <div className="search_detail">
                    <div className="sub_searchDiv">
                        <div className="with_label_input">
                            <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                            <label className="form__label">From</label>
                        </div>
                        {/* <img alt='' /> */}
                        <div className="with_label_input">
                            <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                            <label className="form__label">To</label>
                            {/* <label for="date" class="col-1 col-form-label">Date</label>
                            <div class="col-5">
                                <div class="input-group date" id="datepicker">
                                    <input type="text" class="form-control" id="date" />
                                    <span class="input-group-append">
                                        <span class="input-group-text bg-light d-block">
                                            <i class="fa fa-calendar"></i>
                                        </span>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                        <div className="with_label_input">
                            <input id="txt" type="date" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                            <label className="form__label">Departure</label>
                        </div>
                        {/* </div>

                        <div className="col-6 sub_searchDiv"> */}
                        <div className="with_label_input">
                            <input id="txt" type="date" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                            <label className="form__label">Return</label>
                        </div>
                        <div className="with_label_input passan_div">
                            <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" "
                                onClick={()=>setShowSelectTraveller(commonComponets.SetOposite(showSelectTraveller))} />
                            <label className="form__label">Passengers & Class</label>
                            <OutsideClickHandler onOutsideClick={()=>setShowSelectTraveller(commonComponets.SetTrueFalse(false))}>
                            {showSelectTraveller &&
                                <div className="select_pass_div">
                                    <div className="traveller_list">
                                        <div className="age_limit">
                                            <p>Traveller</p>
                                            <label>Adults (12y+)</label>
                                        </div>
                                        <span>Remove</span>
                                    </div>
                                    <div className="traveller_count">
                                        <ul>
                                            <li>1</li>
                                            <li className="active">2</li>
                                            <li>3</li>
                                            <li>4</li>
                                            <li>5</li>
                                            <li>6</li>
                                            <li>7</li>
                                            <li>8</li>
                                            <li>9</li>
                                            <li>10</li>
                                        </ul>
                                    </div>
                                    <div className="row mt-2 justify-content-between">
                                        <div className="col-7">
                                            <div className="age_limit">
                                                <p>Child</p>
                                                <label>2-11 years</label>
                                            </div>
                                            <div className="traveller_count">
                                                <ul>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                    <li>4</li>
                                                    <li>5</li>
                                                    <li>6</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="age_limit">
                                                <p>Infant</p>
                                                <label>0-2 years</label>
                                            </div>
                                            <div className="traveller_count">
                                                <ul>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                    <li>4</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="travel_type">
                                        <div className="age_limit">
                                            <p>Traveller</p>
                                        </div>
                                        <div className="select_type">
                                            <button className="active">Economy</button>
                                            <button>Premium Economy</button>
                                            <button>Business</button>
                                        </div>
                                    </div>
                                    <div className="selected_travellers">
                                        <button>Apply</button>
                                    </div>
                                </div>
                            }
                            </OutsideClickHandler>
                        </div>
                        <button className="search_btn">Search Flights</button>
                    </div>
                </div>
            </div>
            <div className="row flight_avl">
                <div className="col-lg-3 col-md-12">
                    {/* <Filter /> */}
                </div>
                <div className="col-lg-9">
                    <div className="price_date_content">
                        {/* <Swiper spaceBetween={10} slidesPerView={6.7} navigation> */}
                        <Swiper spaceBetween={10} slidesPerView={slidePerview} navigation>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date pd_select">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                            <SwiperSlide className="price_date">
                                <p>Mon, 14 Dec</p>
                                <label>₹ 4800</label>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="sorting_div">
                        <h4>Flights from Delhi to Mumbai</h4>
                        {/* <select className="sort_by">
                            <option>Sort</option>
                            <option>Price</option>
                        </select> */}
                        <Dropdown className="sort_by" >
                            <Dropdown.Toggle id="dropdown-basic">
                                Sort
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item >Price low to high</Dropdown.Item>
                                <Dropdown.Item >Price high to low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="flight_list">
                        <div className="flight_detail">
                            <label className='tag'>Refundable</label>
                            <div className="flight_name">
                                <img src={images['searchIcon.svg']} alt="img" />
                                <div className='flightname_sub'>
                                    <label>Indigo</label>
                                    <p>Ind-098</p>
                                </div>
                            </div>
                            <div className="flight_time">
                                <div className='sub_flight_time'>
                                    <label>08:05</label>
                                    <p>New Delhi</p>
                                </div>
                                <label className="duration">2hr 10min</label>
                                <div className='sub_flight_time'>
                                    <label>10:05</label>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="flight_price">
                                <div className='sub_flightPrice'>
                                    <label>₹4,999</label>
                                    <p>499 pts.</p>
                                </div>
                                <button className="detail_btn">View Details</button>
                            </div>
                        </div>
                        <div className="flight_detail">
                            <label className='tag'>Refundable</label>
                            <div className="flight_name">
                                <img src={images['searchIcon.svg']} alt="img" />
                                <div className='flightname_sub'>
                                    <label>Indigo</label>
                                    <p>Ind-098</p>
                                </div>
                            </div>
                            <div className="flight_time">
                                <div className='sub_flight_time'>
                                    <label>08:05</label>
                                    <p>New Delhi</p>
                                </div>
                                <label className="duration">2hr 10min</label>
                                <div className='sub_flight_time'>
                                    <label>10:05</label>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="flight_price">
                                <div className='sub_flightPrice'>
                                    <label>₹4,999</label>
                                    <p>499 pts.</p>
                                </div>
                                <button className="detail_btn">View Details</button>
                            </div>
                        </div>
                        <div className="flight_detail">
                            <label className='tag'>Refundable</label>

                            <div className="flight_name">
                                <img src={images['searchIcon.svg']} alt="img" />
                                <div className='flightname_sub'>
                                    <label>Indigo</label>
                                    <p>Ind-098</p>
                                </div>
                            </div>
                            <div className="flight_time">
                                <div className='sub_flight_time'>
                                    <label>08:05</label>
                                    <p>New Delhi</p>
                                </div>
                                <label className="duration">2hr 10min</label>
                                <div className='sub_flight_time'>
                                    <label>10:05</label>
                                    <p>Mumbai</p>
                                </div>
                            </div>
                            <div className="flight_price">
                                <div className='sub_flightPrice'>
                                    <label>₹4,999</label>
                                    <p>499 pts.</p>
                                </div>
                                <button className="detail_btn">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        screenSize: state.screenSize
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setScreenSize: (sSize) => { dispatch({ type: 'SCREEN_SIZE', payload: sSize }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Flights);