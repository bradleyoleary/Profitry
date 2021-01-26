import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Colors";
import Form from "./Form/Form";
import List from "./List/List";
import { PushToTalkButton, ErrorPanel } from "@speechly/react-ui";

const Main = ({ incomeTitle, expensesTitle }) => {
  return (
    <Card>
      <CardTitle>My Balances</CardTitle>
      <TopWrapper>
        <Subtitle>
          Try using the <strong>Speechly</strong> button!
        </Subtitle>
        <PushToTalkButton
          size='4.5rem'
          gradientStops={["#87E2BF", "#0fc77f"]}
        />
        <ErrorPanel />
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
  border-radius: 14px;
  width: 80%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.12);
  @media (max-width: 768px) {
    flex-direction: column;
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

export default Main;
