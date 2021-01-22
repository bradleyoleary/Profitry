import React from "react";
import styled from "styled-components";
import useTransactions from "../../useTransactions";
import { Polar } from "react-chartjs-2";

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  return (
    <Card>
      <CardTitle>
        {title}
        <CardContent>${total}</CardContent>
      </CardTitle>
      <Polar data={chartData} />
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 10px;
  margin: 10px;
  border-radius: 18px;
  /* height: 20em;
  width: 25em; */
  /* justify-content: center; */
  /* @media (max-width: 768px) {
    flex-direction: column;
    color: red;
    width: 90%;
    display: flex;
  } */
`;

const CardTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContent = styled.p``;

export default Details;
