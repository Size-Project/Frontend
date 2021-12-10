import React from 'react';
import styled from 'styled-components';
import ProductInfoHeader from 'app.feature/production/ProductInfoHeader';
import ButtonBox from 'app.feature/production/ButtonBox';
import { API_ITEMS } from 'app.modules/api/constant';
import { useState, useEffect } from 'react';
import API from 'app.modules/api';
import { useParams } from 'react-router';

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
  const [product, setProduct] = useState({
    id: 0,
    imageUrl: '',
    name: '',
    price: 0,
    storeName: '',
  });

  const { productionId } = useParams();

  const requestProduct = async () => {
    try {
      const res = await API.GET(`${API_ITEMS}/${productionId}`);
      const data = res.data;
      setProduct({
        ...product,
        id: data.id,
        imageUrl: data.imageUrl,
        name: data.name,
        price: data.price,
        storeName: data.storeName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <StyledWrapper>
      <nav className="category">가구</nav>
      <section className="product-box">
        <div className="photo-box">
          <div className="thumbnail-box">
            <img src={product.imageUrl} alt="" className="thumbnail" />
          </div>
          <div className="cover-image-box">
            <img src={product.imageUrl} alt="" className="cover-image" />
          </div>
        </div>
        <div className="product-info">
          <ProductInfoHeader
            name={product.name}
            price={product.price}
            storeName={product.storeName}
          />
          <ButtonBox />
        </div>
      </section>
    </StyledWrapper>
  );
};

export default ProductionLayout;
