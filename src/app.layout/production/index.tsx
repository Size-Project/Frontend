import React from 'react';
import styled from 'styled-components';
import background1 from './image/background1.jpeg';
import background2 from './image/background2.jpeg';
import background3 from './image/background3.jpeg';
import background4 from './image/background4.jpeg';
import background5 from './image/background5.jpeg';
import ProductInfoHeader from 'app.feature/Production/ProductInfoHeader';
import ButtonBox from 'app.feature/Production/ButtonBox';

const StyledWrapper = styled.div`
  width: 1136px;
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
      margin-right: 50px;
      display: flex;
      height: 550px;
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
      .cover-image-box {
        flex: 1;
      }
    }
    .product-info {
      flex-basis: 40%;
    }
  }
`;

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
          <div className="cover-image-box">
            <img src={background1} alt="" className="cover-image" />
          </div>
        </div>
        <div className="product-info">
          <ProductInfoHeader />
          <ButtonBox />
        </div>
      </section>
    </StyledWrapper>
  );
};

export default ProductionLayout;
