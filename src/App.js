import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageMain from './pages/Main';
import PageSign from './pages/Sign';
import PageLogin from './pages/Login';
import PageProduction from './pages/Production';
import PageCategory from './pages/Category';

const App = () => {
  //로그인 여부 확인해서 로그인 창 or 메인 페이지 결정

  return (
    <>
      <Routes>
        <Route exact path="/category" element={<PageCategory />} />
        <Route exact path="/" element={<PageMain />} />
        <Route exact path="/sign" element={<PageSign />} />
        <Route exact path="/login" element={<PageLogin />} />
        <Route
          exact
          path="/production/:productionId"
          element={<PageProduction />}
        />
      </Routes>
    </>
  );
};

export default App;
