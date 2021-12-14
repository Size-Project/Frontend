import React, { useState } from 'react';
import styled from 'styled-components';
import ModalProductionReview from './ModalProductionReview';

const ProductionDetail = ({
  review,
  product,
  isModalVisible,
  handleModalVisible,
}: any) => {
  const [detailTab, setDetailTab] = useState('info');
  const grade = review?.reduce((acc: any, cur: any) => {
    acc += cur?.grade;
    return acc;
  }, 0);
  const avgGrade = grade && review?.length ? grade / review?.length / 10 : 0;

  return (
    <StyledWrapper>
      <ModalProductionReview
        product={product}
        isModalVisible={isModalVisible}
        handleModalVisible={handleModalVisible}
      />
      <div className="detail-title">
        <div
          className={`title-item ${detailTab === 'info'}`}
          onClick={() => setDetailTab('info')}
        >
          상품정보
        </div>
        <div
          className={`title-item ${detailTab === 'review'}`}
          onClick={() => setDetailTab('review')}
        >
          리뷰 {review?.length}
        </div>
      </div>

      <div className={`detail-content ${detailTab === 'info'}`}>
        {product?.content}
      </div>
      <div className={`detail-content review ${detailTab === 'review'}`}>
        <div className="detail-content-title">
          <div>
            리뷰 <b>{review?.length}</b>
          </div>
          <div className="review-button" onClick={handleModalVisible}>
            리뷰쓰기
          </div>
        </div>
        <div className="detail-grade-wrap">
          <div className="detail-grade">
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
          </div>
          <div className="average-grade">{avgGrade?.toFixed(1)}</div>
        </div>
        <div className="user-review-wrap">
          {review?.map((item: any, idx: number) => {
            return (
              <div key={idx} className="user-review">
                <div className="user-name">{item?.username}</div>
                <div className="user-review-grade">
                  {(item?.grade / 10).toFixed(1)}점
                </div>
                <div className="user-review-content">{item?.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProductionDetail;

const StyledWrapper = styled.div`
  .detail-title {
    align-items: center;
    display: flex;
    padding: 0 60px;
    width: 100%;
    font-size: 15px;
    background-color: #fafafa;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;

    .title-item {
      font-size: 15px;
      font-weight: 700;
      padding: 18px 10px 15px;
      cursor: pointer;
      transition: all 200ms;
      border-bottom: 3px solid transparent;

      &.true {
        color: #35c5f0;
        border-bottom: 3px solid #35c5f0;
      }
    }
  }

  .detail-content {
    margin: 60px;

    &.true {
      display: block;
    }

    &.false {
      display: none;
    }

    .detail-content-title {
      .review-button {
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
      }

      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      b {
        color: #35c5f0;
      }
    }

    .detail-grade-wrap {
      display: flex;
      align-items: center;
      font-size: 34px;
      font-weight: 700;
      width: 100%;
      background-color: #f7f8fa;
      border-radius: 8px;
      text-align: center;
      padding: 30px;
      margin-bottom: 20px;

      .detail-grade {
        margin-right: 10px;
        color: rgb(53, 197, 240);
        display: flex;
        align-items: center;

        .star-icon-wrap {
          margin-right: 1px;

          .star-icon {
            width: 20px;
          }
        }
      }
    }

    .user-review-wrap {
      .user-review {
        padding: 0 0 20px;
        margin: 0 0 20px;

        .user-name {
          margin-bottom: 10px;
        }

        .user-review-grade {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
