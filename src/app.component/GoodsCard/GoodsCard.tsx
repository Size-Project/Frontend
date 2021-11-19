import React from "react";
import styled from "styled-components";
import SampleGoods from "./goods.webp";

const GoodsCard = () => {
  return (
    <StyledWrapper className="goods-card-wrap">
      <div className="goods-img">
        <img src={SampleGoods} />
      </div>
      <div className="goods-content">
        <div className="goods-brand">장미맨숀</div>
        <div className="goods-title">
          리브 원목 화장대 2colors리브 원목 화장대 2colors리브 원목 화장대
          2colors리브 원목 화장대 2colors리브 원목 화장대 2colors리브 원목
          화장대 2colors
        </div>
        <div className="goods-price">
          <span className="price-off">59%</span>
          <span className="price-amount">{(269000).toLocaleString()}</span>
        </div>
        <div className="goods-review">
          <span className="review-grade">4.5</span>
          <span className="review-detail">리뷰 682</span>
        </div>
        <div className="goods-tag"></div>
      </div>
    </StyledWrapper>
  );
};

export default GoodsCard;

const StyledWrapper = styled.div`
  width: 100%;

  .goods-img {
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: cover;

      transition-duration: 200ms;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .goods-content {
    padding: 0 10px;
    font-weight: 400;

    .goods-brand {
      color: #757575;
      word-break: break-all;
      font-size: 11px;
      margin-bottom: 5px;
    }

    .goods-title {
      font-size: 13px;
      color: #000;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-break: break-all;
      line-height: 17px;
      margin-bottom: 2px;
    }

    .goods-price {
      font-size: 17px;
      line-height: 23px;
      font-weight: 700;
      margin-bottom: 3px;
      .price-off {
        color: #35c5f0;
        margin-right: 2px;
      }
      .price-amount {
        color: #000;
      }
    }

    .goods-review {
      font-weight: 700;
      font-size: 12px;

      .review-grade {
        margin-right: 2px;
        color: #424242;
      }

      .review-detail {
        color: #9e9e9e;
      }
    }
  }
`;
