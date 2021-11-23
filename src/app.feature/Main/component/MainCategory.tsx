import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import MainCategorySwiper from "./MainCategorySwiper";

SwiperCore.use([Pagination, Navigation]);

const MainCategory = () => {
  return (
    <StyledWrapper>
      <div className="category-title">카테고리</div>
      <MainCategorySwiper />
    </StyledWrapper>
  );
  return (
    <StyledWrapperV2>
      <div className="category-title">카테고리</div>
      <div className="swiper-category">
        <Swiper
          spaceBetween={10}
          slidesPerView={10}
          centerInsufficientSlides
          className="category-list-wrap"
        >
          {Array.from(Array(20).keys()).map((item, idx) => (
            <SwiperSlide className="category-list-item" key={idx}>
              <div className="category-item-img" />
              <div className="category-item-title">카테고리</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </StyledWrapperV2>
  );
};

export default MainCategory;

const StyledWrapper = styled.div`
  margin: 50px 60px 0;

  .category-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .category-swiper-wrap {
  }
`;

const StyledWrapperV2 = styled.div`
  margin: 50px 60px 0;

  .category-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .swiper-category {
    width: 100%;
    max-width: 100%;
    .category-list-wrap {
      width: 100%;
      display: flex;

      .swiper-wrapper {
        width: 100%;
        display: flex;

        .category-list-item {
          cursor: pointer;
          margin: 0;
          .category-item-img {
            width: 80px;
            height: 80px;
            background-color: #f5f5f5;
            margin: 0 auto;
          }

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
  }
`;
