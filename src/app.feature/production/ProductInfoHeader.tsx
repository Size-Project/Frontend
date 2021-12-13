import React, { useState } from 'react';
import styled from 'styled-components';
import ModalProductionReview from './component/ModalProductionReview';

const StyledWrapper = styled.div`
  .storeName {
    color: #656e75;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .name {
    font-size: 22px;
    line-height: 33px;
  }

  .review {
    color: rgb(53, 197, 240);
    font-size: 13px;
    margin: 10px 0;
    display: flex;
    align-items: center;

    .star-icon-wrap {
      margin-right: 1px;

      .star-icon {
        width: 13px;
      }
    }

    .average-grade {
      margin-left: 2px;
    }

    .review-count {
      margin-left: 10px;
    }
  }

  .discount {
    margin: 10px 0;

    .discount-rate {
      color: rgb(53, 197, 240);
      font-size: 30px;
      margin-right: 20px;
    }

    .price {
      color: rgb(0, 0, 0);
      font-size: 30px;
      font-weight: 900;
    }
  }
`;

const ProductInfoHeader = ({ name, price, storeName, review }: any) => {
  const grade = review?.reduce((acc: any, cur: any) => {
    acc += cur?.grade;
    return acc;
  }, 0);
  const avgGrade = grade && review?.length ? grade / review?.length / 10 : 0;

  return (
    <StyledWrapper>
      <div className="storeName">{storeName}</div>
      <div className="name">{name}</div>
      <div className="review">
        {Array.from(Array(Math.floor(avgGrade))).map((item, idx) => (
          <div className="star-icon-wrap" key={idx}>
            <svg
              className="star-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 19.72l-5.677 2.405c-.76.322-1.318-.094-1.247-.906l.533-6.142-4.042-4.656c-.54-.624-.317-1.283.477-1.467l6.006-1.39L11.23 2.28c.426-.707 1.122-.699 1.542 0l3.179 5.282 6.006 1.391c.805.187 1.011.851.477 1.467l-4.042 4.656.533 6.142c.072.822-.497 1.224-1.247.906L12 19.72z"
              ></path>
            </svg>
          </div>
        ))}
        <div className="average-grade">{avgGrade?.toFixed(1)}</div>
        <div className="review-count">{review?.length}개 리뷰</div>
      </div>
      <div className="discount">
        {/*<span className="discount-rate">30%</span>*/}
        <span className="price">{price.toLocaleString()}원</span>
      </div>
    </StyledWrapper>
  );
};

export default ProductInfoHeader;
