import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .name {
    font-size: 22px;
    line-height: 33px;
    margin: 20px 0;
  }
  .review {
    color: rgb(53, 197, 240);
    font-size: 13px;
    margin: 20px 0;
  }
  .discount {
    margin: 20px 0;
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

const ProductInfoHeader = ({ name, price, storeName }: any) => {
  return (
    <StyledWrapper>
      <div className="storeName">{storeName}</div>
      <div className="name">{name}</div>
      <div className="review">4.5 20개 리뷰</div>
      <div className="discount">
        <span className="discount-rate">30%</span>
        <span className="price">{price}원</span>
      </div>
    </StyledWrapper>
  );
};

export default ProductInfoHeader;
