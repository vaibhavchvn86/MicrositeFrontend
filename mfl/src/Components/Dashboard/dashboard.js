import './_dashboard.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { commonServices } from "../../Utility/common.services";
import { commonComponets } from '../Common/commonComponent';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
SwiperCore.use(Navigation)

function Dashboard(props) {
    const images = commonServices.importImage(require.context('../../Assets/Icons/', false, /\.(png|jpe?g|svg)$/));
    const [slidePerview, setSlidePerview] = useState(window.innerWidth < 540 ? 1.5 : window.innerWidth < 720 ? 2.8 : window.innerWidth < 960 ? 3.5 : 3.8);

    useEffect(() => {
        let screenSize = window.innerWidth
        setSlidePerview(screenSize < 540 ? 1.5 : screenSize < 720 ? 2.8 : screenSize < 960 ? 3.5 : 3.8)
    }, [props.screenSize])

    return (
        <div className="main-div">
            <div className="dashboard_div">
                <div className="main_banner_div">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation
                    >
                        {/* <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide> */}
                        <SwiperSlide><img src={images['dash_banner.png']} /></SwiperSlide>
                        <SwiperSlide><img src={images['dash_banner.png']} /></SwiperSlide>
                        <SwiperSlide><img src={images['dash_banner.png']} /></SwiperSlide>
                        <SwiperSlide><img src={images['dash_banner.png']} /></SwiperSlide>
                        {/* <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                        <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                        <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide> */}
                    </Swiper>
                </div>
                <div className={(props.screenSize > 1020 || props.screenSize < 535) ? "dasboard_sliders_div container" : "dasboard_sliders_div px-5"}>
                    <div className="slider_with_label">
                        <div className="slider_header">
                            <h4>Gifting Categories</h4>
                            <label>View All</label>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={slidePerview}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                        >
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider_with_label exclusive_div">
                        <div className="slider_header">
                            <h4>Exclusive Deals</h4>
                            <label>View All</label>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={slidePerview}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                        >
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                            <SwiperSlide>
                                {commonComponets.DealCard()}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider_with_label">
                        <div className="slider_header">
                            <h4>Shop Categories</h4>
                            <label>View All</label>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><img src={images['women.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="utilities_div">
                        <div className="slider_header">
                            <h4>Utilities</h4>
                        </div>
                        <div className='cards_div'>
                            <div className='utility_card mob col'>
                                <img src={images['bulb.svg']} />
                                <p>Mobile Recharge</p>
                            </div>
                            <div className='utility_card dth col'>
                                <img src={images['dth.svg']} />
                                <p>DTH</p>
                            </div>
                            <div className='utility_card water col'>
                                <img src={images['water.svg']} />
                                <p>Water Bill</p>
                            </div>
                            <div className='utility_card elec col'>
                                <img src={images['bulb.svg']} />
                                <p>Electricity Bill</p>
                            </div>
                            <div className='utility_card cyl col'>
                                <img src={images['cylinder.svg']} />
                                <p>Electricity Bill</p>
                            </div>
                        </div>
                    </div>
                    <div className="slider_with_label">
                        <div className="slider_header">
                            <h4>Travel</h4>
                            <label>View All</label>
                        </div>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={slidePerview}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                        >
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['teddy.svg']} /></SwiperSlide>
                            <SwiperSlide><img src={images['coffee.svg']} /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="hot_offer">

                    </div>
                </div>
                <div className="explore_div">

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);