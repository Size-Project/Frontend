import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'app.component/Modal/Modal';
import API from 'app.modules/api';
import { API_REVIEWS } from '../../../app.modules/api/constant';

const SVGStar = () => (
  <svg
    className="star"
    fill="currentColor"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 36 36"
  >
    <path
      fill-rule="evenodd"
      d="M18 30.7l-9 3.8c-1.5.7-2.6-.2-2.5-1.8l.8-9.7L1 15.6c-1-1.3-.6-2.6 1-3l9.5-2.2 5-8.3c1-1.5 2.3-1.5 3.1 0l5 8.3 9.6 2.2c1.6.4 2 1.7 1 3L28.7 23l.8 9.7c.1 1.6-1 2.5-2.5 1.8l-9-3.8z"
    ></path>
  </svg>
);

const ModalProductionReview = ({
  product,
  isModalVisible,
  handleModalVisible,
}: any) => {
  const [grade, setGrade] = useState(0);
  const [hoverGrade, setHoverGrade] = useState(0);
  const [review, setReview] = useState(null);
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!grade) {
      alert('리뷰 점수를 선택해주세요');
    }

    const res = await API.POST({
      url: API_REVIEWS,
      data: {
        itemId: product?.id,
        grade: grade * 10,
        content: review,
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MUBuYXZlci5jb20iLCJpYXQiOjE2Mzk0MDEyNjUsImV4cCI6MTYzOTQ4NzY2NX0.RL_KX-p-FnU2eZ7tYzMFLWSa6zZ_XyKUX8xBPndQZx_5EeXa6jGCjwX4QqyhRulgOm6hdgBPvO0LYpxpA2eQJQ`,
      },
    });

    if (res?.data === 'success') handleModalVisible();
    else alert('리뷰 등록 실패');
  };

  return (
    <StyledModal
      id="modal-production-review"
      open={isModalVisible}
      onClose={handleModalVisible}
      closable
    >
      <StyledWrapper>
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="review-modal-title">리뷰 쓰기</div>
          <div className="review-modal-content">
            <div className="product-info-wrap">
              <div className="product-image">
                <img src={product?.imageUrl} />
              </div>
              <div className="product-info">
                <div className="brand">{product?.storeName}</div>
                <div className="name">{product?.name}</div>
              </div>
            </div>
            <div className="review-grade-wrap">
              <div className="review-title">별점 평가</div>
              <div className="review-grade">
                <div className="review-txt">만족도</div>
                <div className="review-star">
                  {[1, 2, 3, 4, 5].map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className={`star-wrap selected-${grade >= item} hover-${
                        hoverGrade >= item
                      }`}
                      onClick={() => setGrade(item)}
                      onMouseOver={() => setHoverGrade(item)}
                      onMouseOut={() => setHoverGrade(0)}
                    >
                      <SVGStar />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="review-content-wrap">
              <div className="review-title">리뷰 작성</div>
              <textarea
                className="review-content"
                onChange={(event: any) => setReview(event.target.value)}
                required
              />
            </div>

            <div className="review-agree-wrap">
              <div className="review-title">
                상품을 직접 사용하고 작성한 리뷰인가요?
              </div>
              <div className="review-agree">
                <input
                  type="checkbox"
                  onChange={(event: any) => setAgree(event.target.checked)}
                  required
                />
                <div>
                  네, 상품을 직접 사용 후 작성한 리뷰이며, 오늘의 집 리뷰 정책에
                  동의합니다.
                </div>
              </div>
            </div>

            <button className="review-button" type="submit">
              완료
            </button>
          </div>
        </form>
      </StyledWrapper>
    </StyledModal>
  );
};

export default ModalProductionReview;

const StyledModal = styled(Modal)`
  .modal-body {
    .modal-content {
    }
  }
`;

const StyledWrapper = styled.div`
  width: 720px;

  .review-title {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .review-modal-title {
    line-height: 1.35;
    font-weight: 700;
    text-align: center;
    font-size: 20px;
    display: block;
    margin-bottom: 30px;
  }

  .review-modal-content {
    .product-info-wrap {
      display: flex;
      margin-bottom: 30px;

      .product-image {
        width: 100px;
        height: 100px;

        img {
          border-radius: 4px;
        }
      }

      .product-info {
        align-self: center;
        margin: 0 0 0 12px;

        .brand {
          margin-bottom: 6px;
          font-size: 11px;
          color: #757575;
        }

        .name {
          margin-bottom: 6px;
          font-size: 15px;
          line-height: 1.2;
        }
      }
    }

    .review-grade-wrap {
      margin-bottom: 50px;

      .review-grade {
        display: flex;
        align-items: center;

        .review-txt {
          font-size: 15px;
          line-height: 42px;
          width: 55px;
        }

        .review-star {
          display: flex;

          .star-wrap {
            &.hover-true {
              .star {
                color: #82e0fa !important;
              }
            }

            &.selected-true {
              .star {
                color: #35c5f0;
              }
            }

            .star {
              cursor: pointer;
              color: #dbdbdb;
              width: 36px;
              height: 36px;
              margin-right: 5px;
            }
          }
        }
      }
    }

    .review-content-wrap {
      margin-bottom: 50px;

      .review-content {
        width: 690px;
        min-height: 110px;
        font-size: 15px;
        padding: 15px;
        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgb(130, 224, 250 / 0.5);
        }
      }
    }

    .review-agree-wrap {
      margin-bottom: 50px;

      .review-agree {
        display: flex;
        align-items: center;
      }

      input {
        margin-right: 10px;
        width: 22px;
        height: 22px;
      }
    }

    .review-button {
      cursor: pointer;
      width: 100%;
      height: 45px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #35c5f0;
      border-color: #35c5f0;
      color: #fff;
      border-radius: 4px;
    }
  }
`;
