import React, { Suspense } from "react";
import {  Route, Routes } from "react-router-dom";

import "./index.scss";
const RemoteIiflApp = React.lazy(() => import("iifl/IiflApp"));
const RemoteMflApp = React.lazy(() => import("mfl/MflApp"));

const App = () => {
  debugger
  return <div>
    <>Hello User</>
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route path="/" element={<p>Home Page</p>} />
        <Route path="/iifl" element={<RemoteIiflApp />} />
        <Route path="/mfl" element={<RemoteMflApp />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </Suspense>
  </div>
};
export default App
