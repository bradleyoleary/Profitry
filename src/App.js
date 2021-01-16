import React from "react";
import styled from "styled-components";
import Details from "./components/Details/Details";

const App = () => {
  return (
    <div>
      <Wrapper>
        <BoxAreaMain>
          <Details />
        </BoxAreaMain>
        <BoxArea>
          <Details />
        </BoxArea>
        <BoxArea>
          <Details />
        </BoxArea>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const BoxAreaMain = styled.div`
  width: 80%;
  position: relative;
  top: 40vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: relative;
    top: 10px;
    width: 100%;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const BoxArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    align-items: center;
  }
`;

export default App;
