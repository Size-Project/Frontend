import styled from 'styled-components';
import MainCategory from '../component/MainCategory';
import MainPopular from '../component/MainPopular';

const ScreenMain = () => {
  return (
    <StyledWrapper>
      <MainCategory />
      <MainPopular />
    </StyledWrapper>
  );
};

export default ScreenMain;

const StyledWrapper = styled.div`
  margin: 100px auto;
  max-width: 1136px;
`;
