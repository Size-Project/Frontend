import React, { useState } from "react";
import styled from "styled-components";
import AppLayoutMenu from "./AppLayoutMenu";

const AppLayout: React.FC = ({ children }) => {
  const [selected, setSelected] = useState("store");

  return (
    <>
      <StyledWrapper>
        <div className="header-left">
          <div className="logo-wrap">오늘의 집</div>
          <div className="menu-wrap">
            <span
              className={`menu ${selected === "community"}`}
              onClick={() => setSelected("community")}
            >
              커뮤니티
            </span>
            <span
              className={`menu ${selected === "store"}`}
              onClick={() => setSelected("store")}
            >
              스토어
            </span>
            <span
              className={`menu ${selected === "experts"}`}
              onClick={() => setSelected("experts")}
            >
              인테리어시공
            </span>
          </div>
        </div>

        <div className="header-right">
          <div className="rt-wrap">
            <span>로그인</span>
            <span>회원가입</span>
          </div>
        </div>
      </StyledWrapper>
      <AppLayoutMenu />
      <body>{children}</body>
    </>
  );
};

export default AppLayout;

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  height: 80px;

  .header-left {
    display: flex;

    .logo-wrap {
      width: 80px;
      margin-right: 30px;
      font-size: 20px;
      font-weight: 900;
    }

    .menu-wrap {
      display: block;

      .menu {
        cursor: pointer;
        color: #424242;
        margin: 0 15px;
        font-size: 18px;
        font-weight: 700;
        transition: color 200ms;

        &.true {
          color: #35c5f0;
        }
      }
    }
  }

  .header-right {
    display: flex;

    .rt-wrap {
      span {
        cursor: pointer;
        font-size: 15px;
        font-weight: 700;
        color: #757575;
        margin: 0 10px;
      }
    }
  }
`;
