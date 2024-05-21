import React, { useEffect, useState } from "react";
import "./header.scss";
import cart from "../../Assets/Icons/cartIcon.svg";
import fav from "../../Assets/Icons/heartIcon.svg";
import search from "../../Assets/Icons/searchIcon.svg";
import { commonServices } from "../../Utility/common.services";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
    const images = commonServices.importImage(require.context('../../Assets/Icons/', false, /\.(png|jpe?g|svg)$/));
    const [screnS, setScrenS] = useState(window.innerWidth);

    const getSize = () => {
        setScrenS(window.innerWidth)
        props.setScreenSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', getSize);
        return (() => {
            window.removeEventListener('resize', getSize);
        })
    }, [screnS])
    return (
        <div className="header_main_div">
            <div className="bgHeader">
                <div className="imgSearch">
                    <img src={images['trc_logo1.svg']} alt="img" className="logo_div" />
                    <div className="searchBox">
                        <input
                            type="text"
                            placeholder="Enter brand name to search offers"
                            className="inputForm"
                        />
                        <button className="srcImg">
                            <img src={images['searchIcon.svg']} alt="img" />
                        </button>
                    </div>
                </div>
                <div className="login-img_wrap">
                    <div className=" img-wrap">
                        <img src={images['cartIcon.svg']} alt="img" className="img-fluid" />
                        <img src={fav} alt="img" className="img-fluid" />
                        <img src={cart} alt="img" className="img-fluid" />
                    </div>
                    <button className="loginBtn">Login/Sign Up</button>
                </div>
            </div>
            {props.screenSize > 735 &&
                <div className="subHeader row">
                    <div className="optionTab col-9">
                        <Link className="option_div" to="/deals">Deal</Link>
                        <Link className="option_div" to="/shop">Shop</Link>
                        <Link className="option_div" to="/">Gifting</Link>
                        <Link className="option_div" to="/utility">Utility</Link>
                        <Link className="option_div" to="/travel">Travel</Link>
                        <Link className="option_div" to="/">Voucher</Link>
                    </div>
                    <div className="redeem_div col-3">
                        <img src={images["star.svg"]} alt="img" className="" />
                        <label>Redeem Code</label>
                    </div>
                </div>
            }
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
