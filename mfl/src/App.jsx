import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./index.scss";

import "swiper/css/bundle";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import ProfileSideView from "./Components/UserDetails";
import Dashboard from "./Components/Dashboard/dashboard";
import Travel from "./Components/Travel/travel";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Components/Shop/shop";
import Filter from "./Components/Common/filter";
import WomenWear from "./Components/Shop/Category/womenWear";
import ProductDetails from "./Components/Shop/Category/productDetails";
import AddressDetails from "./Components/Shop/Category/addressDetails";
import Deals from "./Components/Deals/deals";
import Utility from "./Components/UtilityTab/utility";
import "./Assets/Style/style.scss";

const App = () => {
  return (
    <div className="border-4  border-blue-700">
      <Routes>
        {/* <Route path="/" element={<p>MFL Page</p>}/>  */}
        <Route path="/" exact element={<Navigate from="/" to="/dashboard" />} />
        <Route
          path="/profile"
          element={
            <div className="main-container">
              <Header />
              <ProfileSideView />
              <Footer />
            </div>
          }
        />
        <Route
          path="/shop"
          element={
            <div className="main-container">
              <Header />
              <Shop />
              <Footer />
            </div>
          }
        />
        <Route path="/filter" element={<Filter />} />
        <Route path="/womenwear" element={<WomenWear />} />
        <Route
          path="/productDetails"
          element={
            <div className="main-container">
              <Header />
              <ProductDetails />
              <Footer />
            </div>
          }
        />
        <Route path="/addressDetails" element={<AddressDetails />} />
        <Route
          path="/deals"
          element={
            <div className="main-container">
              <Header />
              <Deals />
              <Footer />
            </div>
          }
        />
        <Route
          path="/utility"
          element={
            <div className="main-container">
              <Header />
              <Utility />
              <Footer />
            </div>
          }
        />
        <Route
          path="/travel"
          element={
            <div className="main-container">
              <Header />
              <Travel />
              <Footer />
            </div>
          }
        />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/dashboard"
          exact
          element={
            <div className="main-container">
              <Header />
              <Dashboard />
              <Footer />
            </div>
          }
        />
        <Route path="*" exact element={<Navigate from="*" to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
