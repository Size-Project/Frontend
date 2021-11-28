import React from 'react';
import styled, { css } from 'styled-components';

const CategorySwiper: React.FC<any> = ({ subHover }) => {
  return (
    <StyledWrapper subHover={subHover}>
      <ul className="swiper-menu-category-wrap">
        {Array.from(Array(20).keys()).map((item, idx) => (
          <li className="menu-category-item" key={idx}>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/162823226017937426.png?gif=1&w=144&h=144&c=c" />{' '}
            <div className="category-item-title">카테고리{idx + 1}</div>{' '}
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default CategorySwiper;

const StyledWrapper = styled.div<any>`
  ${({ subHover }) => css`
    width: 100%;
    height: 150px;
    position: fixed;
    top: ${subHover ? '130px' : '-100px'};
    transition-delay: 500ms;
    transition: top 500ms;
    background-color: #fff;
    z-index: 997;

    &:hover {
      top: 130px;
    }

    .swiper-menu-category-wrap {
      background-color: #fff;
      padding: 10px 40px;
      overflow-x: scroll;
      display: flex;
      width: 100%;

      .menu-category-item {
        padding: 10px 5px;
        cursor: pointer;
        color: #424242;

        img {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }

        .category-item-title {
          text-align: center;
          margin: 0 -10px;
          font-size: 14px;
          font-weight: 700;
        }

        &:hover {
          color: #35c5f0;
        }
      }
    }
  `}
`;
