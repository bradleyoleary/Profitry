import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const Details = () => {
  return (
    <Card>
      <CardTitle>Income</CardTitle>
      <CardContent>$100</CardContent>
      {/* <Doughnut data='Data' /> */}
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 10px;
  margin: 20px;
  border-radius: 18px;
  width: 50%;
  @media (max-width: 768px) {
    flex-direction: column;
    color: red;
    width: 90%;
    display: flex;
  }
`;

const CardTitle = styled.h1``;

const CardContent = styled.p``;

export default Details;
