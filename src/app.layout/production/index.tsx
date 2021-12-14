import React from 'react';
import styled from 'styled-components';
import { API_ITEMS, API_REVIEWS } from 'app.modules/api/constant';
import { useState, useEffect } from 'react';
import API from 'app.modules/api';
import { useParams } from 'react-router';
import ProductInfoHeader from '../../app.feature/Production/ProductInfoHeader';
import ButtonBox from '../../app.feature/Production/ButtonBox';
import ProductionDetail from '../../app.feature/Production/component/ProductionDetail';

const StyledWrapper = styled.div`
  margin: 100px auto;
  max-width: 1136px;
  align-self: center;

  .production-wrap {
  }

  .category {
    color: rgb(117, 117, 117);
    cursor: pointer;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .product-box {
    margin: 0 60px 40px;
    display: flex;
    justify-content: space-between;

    .photo-box {
      width: 100%;
      padding: 0 10px;
      display: flex;

      .thumbnail-box {
        display: flex;
        flex-direction: column;
        margin-right: 10px;

        .thumbnail {
          border-radius: 4px;
          width: 52px;
          height: 52px;
          margin-bottom: 10px;
        }
      }

      .cover-image-box {
        width: 100%;
        img {
          border-radius: 4px;
        }
      }
    }

    .product-info {
      padding: 0 10px;
      max-width: 380px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    stockQuantity: 0,
    content: null,
  });
  const [review, setReview]: any = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

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
        content: data.content,
        stockQuantity: data.stockQuantity,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const requestReview = async () => {
    try {
      const res = await API.GET(`${API_REVIEWS}/${productionId}`);
      if (!res) throw 'err';
      setReview(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestProduct();
    requestReview();
  }, []);

  return (
    <StyledWrapper>
      <div className="production-wrap">
        {/*<nav className="category">가구</nav>*/}
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
              review={review}
              handleModalVisible={handleModalVisible}
            />
            <ButtonBox product={product} />
          </div>
        </section>

        <section className="product-detail">
          <ProductionDetail
            review={review}
            product={product}
            isModalVisible={isModalVisible}
            handleModalVisible={handleModalVisible}
          />
        </section>
      </div>
    </StyledWrapper>
  );
};

export default ProductionLayout;
