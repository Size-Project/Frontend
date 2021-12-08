import styled from 'styled-components';
import { useEffect, useState } from 'react';
import API from '../../../app.modules/api';

const ScreenCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState();

  const requestCategories = async () => {
    try {
      const res = await API.GET('/api/categories');
      setCategories(res?.data?.subCategories);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <StyledWrapper>
      <div className="category-list-wrap">
        {categories.map((item: any, idx) => (
          <div key={idx} className="list-item">
            {item.name}
          </div>
        ))}
      </div>
      <div className="category-goods-wrap"></div>
    </StyledWrapper>
  );
};

export default ScreenCategory;

const StyledWrapper = styled.div`
  max-width: 1136px;
  display: flex;
  margin: 90px 40px;

  .category-list-wrap {
    width: 160px;

    .list-item {
      padding-bottom: 10px;
      font-size: 13px;
      transition: opacity 100ms;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
