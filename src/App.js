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
      <RightContainer>
        <Details title='Income' />
        <Details title='Expense' />
      </RightContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 65%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2.4em;
  }
`;

const LeftContainer = styled.div`
  flex: 100%;
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 100%;
`;

export default App;
