import styled from "styled-components";
import Test from "../component/Test";

const ScreenMain = () => {
  return (
    <StyledWrapper>
      메인페이지
      <Test />
    </StyledWrapper>
  );
};

export default ScreenMain;

const StyledWrapper = styled.div``;
