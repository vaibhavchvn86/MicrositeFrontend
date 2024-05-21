import React from "react";
import {  Route, Routes } from "react-router-dom";

import "./index.scss";

const App = () => {
  return <div className="border-4  border-blue-700">
  <Routes>
   <Route path="/" element={<p>IIFL Page</p>}/> 
 </Routes>
 </div>
};

export default App;