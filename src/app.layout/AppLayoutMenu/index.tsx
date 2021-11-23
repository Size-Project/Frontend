import React from "react";
import styled from "styled-components";

export const MenuStoreArr = ["스토어홈", "카테고리", "베스트"];

const AppLayoutMenu = () => {
  return (
    <StyledWrapper>
      <div className="menu-list-wrap">
        {MenuStoreArr.map((item, idx) => (
          <span key={idx} className={`menu-list ${idx === 0}`}>
            {item}
          </span>
        ))}
      </div>
    </StyledWrapper>
  );
};

export default AppLayoutMenu;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  .menu-list-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    border-bottom: 1px solid #ededed;
    font-size: 15px;
    font-weight: 700;
    color: #424242;
    padding: 0 40px;

    .menu-list {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      margin: 0 12px;
      transition: color 200ms;

      &.true {
        color: #35c5f0;
        border-bottom: 2px solid #35c5f0;
      }
      &:hover {
        color: #35c5f0;
      }
    }
  }

  .menu-list-wrap::-webkit-scrollbar {
    display: none;
  }
`;
