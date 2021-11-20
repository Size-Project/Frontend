import React, { useState } from "react";
import styled, { css } from "styled-components";

const IMG_CNT = 22;
const MOVING_CNT = 10;

interface ITSwiper {
  swiperX: number;
}

const MainCategorySwiper = () => {
  const [swiperX, setSwiperX] = useState(0);
  const [swiperEnd, setSwiperEnd] = useState(false);

  const handlePrevBtn = () => {
    setSwiperEnd(false);
    if (Math.abs(swiperX) < MOVING_CNT) setSwiperX(0);
    else setSwiperX((prev) => prev + MOVING_CNT);
  };

  const handleNextBtn = () => {
    if (IMG_CNT - Math.abs(swiperX) * 2 < MOVING_CNT) {
      console.log("작은 경우");
      setSwiperX((prev) => prev - (IMG_CNT - Math.abs(swiperX) * 2));
      setSwiperEnd(true);
    } else {
      setSwiperX((prev) => prev - MOVING_CNT);
    }
  };

  return (
    <StyledWrapper swiperX={swiperX}>
      <div className="swiper-category-wrap">
        {!!swiperX && (
          <button className="swiper-btn prev" onClick={handlePrevBtn}>
            {"<"}
          </button>
        )}

        <ul className="swiper-category">
          {Array.from(Array(IMG_CNT).keys()).map((item, idx) => (
            <li className="category-item" key={idx}>
              <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=144&h=144&c=c" />{" "}
              <div className="category-item-title">카테고리{idx + 1}</div>
            </li>
          ))}
        </ul>
        {!(IMG_CNT - Math.abs(swiperX) === MOVING_CNT) && (
          <button className="swiper-btn next" onClick={handleNextBtn}>
            {">"}
          </button>
        )}
      </div>
    </StyledWrapper>
  );
};

export default MainCategorySwiper;

const StyledWrapper = styled.div<ITSwiper>`
  ${({ swiperX }) => css`
    .swiper-category-wrap {
      position: relative;

      .swiper-btn {
        cursor: pointer;
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.26);
        color: #fff;
        &.next {
          right: 0;
        }
      }

      .swiper-category {
        overflow: hidden;
        display: flex;
        width: 100%;
        .category-item {
          min-width: calc(10%);
          cursor: pointer;
          transition-duration: 400ms;
          transform: translateX(calc(100% * ${swiperX}));

          .category-item-title {
            margin: 18px 0 0;
            color: #424242;
            font-size: 15px;
            font-weight: 700;
            text-align: center;
            word-break: keep-all;
          }
        }
      }
    }
  `};
  
  }
`;
