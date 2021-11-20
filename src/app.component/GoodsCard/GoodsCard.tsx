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
          <div className="review-star">
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
          <div className="review-grade">4.5</div>
          <div className="review-detail">리뷰 682</div>
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
    height: auto;
    padding-bottom: 100%;
    margin-bottom: 10px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    img {
      height: 100%;
      position: absolute;
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
      font-weight: 700;
      margin-bottom: 3px;
      line-height: 23px;
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
      display: flex;
      align-items: center;

      .review-star {
        margin-right: 2px;

        .star-icon {
          height: 12px;
          width: 12px;
          color: #35c5f0;
        }
      }

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
