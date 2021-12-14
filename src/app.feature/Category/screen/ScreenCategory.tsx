import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GridGoods from '../../../app.component/Grid/GridGoods';
import CategoryGoods from '../component/CategoryGoods';

const ScreenCategory = (props: any) => {
  const { categoryId } = props;
  const [selected, setSelected]: any = useState(null);
  const [unselected, setUnselected]: any = useState(null);
  const [subShow, setSubShow]: any = useState({});
  const [subSelected, setSubSelected]: any = useState(null);

  const categories = useSelector((state: any) => state.category);

  useEffect(() => {
    const selectedCategory = categories.find(
      (item: any) => String(item.id) === categoryId,
    );

    if (selectedCategory?.subCategories) {
      selectedCategory?.subCategories.map((item: any) => {
        subShow[item?.id] = false;
      });
    } else {
      setSubShow({});
    }

    setSelected(selectedCategory);
    setUnselected(
      categories.filter((item: any) => String(item.id) !== categoryId),
    );
  }, [categories]);

  const params = new URLSearchParams(window.location.search);

  const handleChangeSubShow = (id: any) => {
    setSubShow((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChangeParams = (id: any, subId: any) => {
    setSubSelected(null);
    params.delete('id');
    params.set('id', id);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params}`,
    );
    setSelected(categories.find((item: any) => String(item.id) === String(id)));
    setUnselected(
      categories.filter((item: any) => String(item.id) !== String(id)),
    );
    if (selected?.subCategories) {
      selected?.subCategories.map((item: any) => {
        subShow[item?.id] = false;
      });
    } else {
      setSubShow({});
    }
  };

  return (
    <StyledWrapper>
      <div className="category-page-wrap">
        <div className="category-list-wrap">
          <div
            className="list-title selected"
            onClick={() =>
              handleChangeParams(selected?.id, selected?.subCategories[0]?.id)
            }
          >
            {selected?.name}
          </div>
          {selected &&
            selected?.subCategories.map((item: any, idx: number) => {
              return (
                <div key={idx} className="list-item-wrap">
                  <div className="list-item">
                    <div onClick={() => setSubSelected(item)}>{item.name}</div>
                    {item?.subCategories && (
                      <div
                        onClick={() =>
                          item?.subCategories && handleChangeSubShow(item?.id)
                        }
                      >
                        <svg
                          className="icon"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <path d="M6.07 7.56l4.39-4.55.87.87-5.25 5.45L.67 3.9 1.53 3z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  {subShow[item?.id] && (
                    <div className="sub-list">
                      {item?.subCategories.map((sub: any, subIdx: number) => (
                        <div key={subIdx} className="sub-list-item">
                          {sub?.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          <div className="list-divider" />
          {unselected &&
            unselected.map((item: any, idx: number) => (
              <div
                key={idx}
                className="list-title unselected"
                onClick={() =>
                  handleChangeParams(item?.id, item?.subCategories[0]?.id)
                }
              >
                {item.name}
              </div>
            ))}
        </div>
        {selected?.id && (
          <div className="category-goods-wrap">
            <CategoryGoods
              selected={selected}
              subSelected={subSelected}
              setSubSelected={setSubSelected}
              handleChangeParams={handleChangeParams}
            />
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

export default ScreenCategory;

const StyledWrapper = styled.div`
  margin: 90px 40px;
  .category-page-wrap {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 1136px;

    .category-list-wrap {
      min-width: 200px;
      max-width: 250px;
      padding: 0 7.5px;

      .list-title {
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;

        &.selected {
          margin-bottom: 27px;
        }

        &.unselected {
          margin-bottom: 20px;
        }
      }

      .list-divider {
        margin: 25px 0 30px;
        width: 100%;
        height: 1px;
        background-color: #dbdbdb;
      }

      .list-item-wrap {
        .list-item {
          height: 23px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 10px;
          font-size: 13px;
          transition: opacity 100ms;

          &:hover {
            opacity: 0.5;
          }
        }

        .sub-list {
          padding-left: 10px;

          .sub-list-item {
            height: 23px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            margin-bottom: 10px;
            font-size: 13px;
            transition: opacity 100ms;

            &:hover {
              opacity: 0.5;
            }
          }
        }
      }

      .category-goods-wrap {
      }
    }
  }
`;
