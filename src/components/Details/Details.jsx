import React from "react";
import styled from "styled-components";
import useTransactions from "../../useTransactions";
import { Polar } from "react-chartjs-2";

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  // console.log(total);
  return (
    <Card>
      <CardTitle>
        {title}
        <p>${total}</p>
      </CardTitle>
      <Polar data={chartData} />
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 10px;
  margin: 10px;
  border-radius: 14px;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.12);
`;

const CardTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Details;
