import React, { useState } from 'react';
import styled from 'styled-components';
import BlueButton from 'app.component/Button/blueButton';
import API from 'app.modules/api';
import { API_CARTS, API_ORDERS } from '../../app.modules/api/constant';

const StyledWrapper = styled.div`
  .product-count {
    margin-bottom: 10px;

    input {
      height: 40px;
      width: 100%;
      padding: 0 10px;
    }
  }

  .product-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    .price-title {
      font-size: 13px;
      font-weight: 700;
      color: #000;
    }

    .price-amount {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .button-wrap {
    display: flex;
    justify-content: space-between;

    .prev-button {
      margin-right: 5px;
    }

    button {
      cursor: pointer;
      width: 100% !important;
      min-width: 150px;
      height: 55px;
      font-size: 17px;
      line-height: 26px;
      background-color: #35c5f0;
      color: #fff;
      border-radius: 4px;
    }
  }
`;

const ButtonBox = ({ product }: any) => {
  const [count, setCount] = useState(0);

  const handleAddCarts = async () => {
    try {
      const res = await API.POST({
        url: API_CARTS,
        data: {
          itemId: product?.id,
          count: Number(count),
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBuYXZlci5jb20iLCJpYXQiOjE2Mzk0MDEyNjUsImV4cCI6MTYzOTQ4NzY2NX0.RL_KX-p-FnU2eZ7tYzMFLWSa6zZ_XyKUX8xBPndQZx_5EeXa6jGCjwX4QqyhRulgOm6hdgBPvO0LYpxpA2eQJQ`,
        },
      });

      if (res?.data === 'success') alert('장바구니에 등록되었습니다.');
      else alert('장바구니 등록에 실패했습니다.');
    } catch (err) {
      console.log(err);
      alert('장바구니 등록에 실패했습니다.');
    }
  };

  const handleBuyProduct = async () => {
    try {
      const res = await API.POST({
        url: API_ORDERS,
        data: {
          orderItemRequest: [
            {
              itemId: product?.id,
              count: Number(count),
            },
          ],
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBuYXZlci5jb20iLCJpYXQiOjE2Mzk0MDEyNjUsImV4cCI6MTYzOTQ4NzY2NX0.RL_KX-p-FnU2eZ7tYzMFLWSa6zZ_XyKUX8xBPndQZx_5EeXa6jGCjwX4QqyhRulgOm6hdgBPvO0LYpxpA2eQJQ`,
        },
      });
      if (res?.data === 'success') alert('상품을 구매했습니다.');
      else alert('상품 구매에 실패했습니다.');
    } catch (err) {
      console.log(err);
      alert('상품 구매에 실패했습니다.');
    }
  };

  return (
    <StyledWrapper>
      <div className="product-count">
        <input
          type="number"
          min={1}
          onChange={(event: any) => setCount(event.target.value)}
        />
      </div>
      <div className="product-price">
        <div className="price-title">주문금액</div>
        <div className="price-amount">
          {(product?.price * count).toLocaleString()}원
        </div>
      </div>
      <div className="button-wrap">
        <div className="prev-button">
          <button onClick={handleAddCarts}>장바구니</button>
        </div>
        <div className="next-button">
          <button onClick={handleBuyProduct}>바로 구매</button>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ButtonBox;
