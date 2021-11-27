import React from 'react';
import styled from 'styled-components';
import BlueButton from 'app.component/Button/blueButton';
import background1 from './image/background1.jpeg';
import background2 from './image/background2.jpeg';
import background3 from './image/background3.jpeg';
import background4 from './image/background4.jpeg';
import background5 from './image/background5.jpeg';

const StyledWrapper = styled.div`
  margin: 0 auto;
  .category {
    color: rgb(117, 117, 117);
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .product-box {
    display: flex;
    .photo-box {
      flex-basis: 60%;
      display: flex;
      .thumbnail-box {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        .thumbnail {
          width: 52px;
          height: 52px;
          margin-bottom: 10px;
        }
      }
      .cover-image {
        width: 400px;
        height: 400px;
      }
    }
    .product-info {
      flex-basis: 40%;
    }
  }
`;

const ProductInfoHeader = styled.section``;

const ButtonBox = styled.div``;
// 썸네일 가로, 세로 52px
// 확대 화면 가로, 세로 422px
const ProductionLayout = () => {
  return (
    <StyledWrapper>
      <nav className="category">가구</nav>
      <section className="product-box">
        <div className="photo-box">
          <div className="thumbnail-box">
            <img src={background1} alt="" className="thumbnail" />
            <img src={background2} alt="" className="thumbnail" />
            <img src={background3} alt="" className="thumbnail" />
            <img src={background4} alt="" className="thumbnail" />
            <img src={background5} alt="" className="thumbnail" />
          </div>
          <img src={background1} alt="" className="cover-image" />
        </div>
        <div className="product-info">
          <ProductInfoHeader>
            <div className="name">상품명</div>
            <div className="review">4.5 20개 리뷰</div>
            <div className="discount">
              <span className="discount-rate">30%</span>
              <span className="price">100,000</span>
            </div>
            <div className="selling-price">70,000</div>
          </ProductInfoHeader>
          <ButtonBox>
            <BlueButton width={187} height={55}>
              장바구니
            </BlueButton>
            <BlueButton width={187} height={55}>
              바로가기
            </BlueButton>
          </ButtonBox>
        </div>
      </section>
    </StyledWrapper>
  );
};

export default ProductionLayout;
