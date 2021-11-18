import styled from "styled-components";
import MainCategory from "../component/MainCategory";

const ScreenMain = () => {
  return (
    <StyledWrapper>
      <MainCategory />
    </StyledWrapper>
  );
};

export default ScreenMain;

const StyledWrapper = styled.div`
  margin: 50px auto;
`;
