import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Constants";
import Form from "./Form/Form";
import List from "./List/List";

const Main = ({ incomeTitle, expensesTitle }) => {
  return (
    <Card>
      <CardTitle>My Balances</CardTitle>
      <TopWrapper>
        <Subtitle>Try using the 🎙 button!</Subtitle>
      </TopWrapper>
      <Form />
      <List />
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 10px;
  margin: 20px;
  border-radius: 18px;
  width: 80%;
  @media (max-width: 768px) {
    flex-direction: column;
    color: red;
    width: 100%;
    display: flex;
    padding: 10px;
    margin: 10px;
  }
`;

const CardTitle = styled.h1`
  color: ${COLORS.primary};
  margin-left: 20px;
`;

const Subtitle = styled.p`
  color: #818181;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

const Amount = styled.p`
  font-weight: bold;
  color: black;
`;

export default Main;
