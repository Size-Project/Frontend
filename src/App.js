import React from "react";
import { Routes, Route } from "react-router-dom";
import PageMain from "./pages/Main";
import PageSign from "./pages/Sign";

const App = () => {
  //로그인 여부 확인해서 로그인 창 or 메인 페이지 결정
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PageMain />} />
        <Route exact path="/sign" element={<PageSign />} />
      </Routes>
    </>
  );
};

export default App;
