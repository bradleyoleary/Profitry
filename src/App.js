import React from "react";
import styled from "styled-components";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Main incomeTitle='I have' expensesTitle='I spent' />
      </LeftContainer>
      {/* <RightContainer> */}
      <RightContainer>
        <Details title='Income' />
        <Details title='Expenses' />
      </RightContainer>
      {/* </RightContainer> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* margin-top: 8em; */
  display: flex;
  margin: 0 auto;
  width: 65%;
  /* height: 95%; */
  padding: 10px;
  /* justify-content: center; */
  /* width: 100%; */
  /* max-width: 100%; */
  /* max-height: 100%; */
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    /* margin-left: 10px;
    margin-right: 10px; */
  }
`;

const LeftContainer = styled.div`
  flex: 100%;
  /* min-height: 90%; */
  /* max-width: 60%; */
  /* border: 1px solid red;
  background: #0bda51; */
  display: flex;
  /* justify-content: center; */
  /* padding: 0.5em; */
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 100%;
  /* min-height: 50%; */
  /* max-width: 80%; */
  /* border: 1px solid red;
  background: #0bda51; */
`;

const BoxAreaMain = styled.div`
  /* width: 80%;
  position: relative;
  top: 20vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    position: relative;
    top: 10px;
    width: 100%;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
  } */
`;

const BoxArea = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 20px;
    align-items: center;
  } */
`;

export default App;
