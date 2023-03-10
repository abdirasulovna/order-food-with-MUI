import React from "react";
import styled from "styled-components";
// import {Button} from "../UI/Button";
// import { ReactComponent as PlusIcon } from "../../assets/icons/increase.svg";
// import { ReactComponent as MinusIcon } from "../../assets/icons/decrease.svg";
import  AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiButton from "../UI/Button";

const BasketItem = ({
  title,
  price,
  amount,
  decrementAmount,
  incrementAmount,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <PriceAndAmountContainer>
          <Price>${price}</Price>
          <Amount>x{amount}</Amount>
        </PriceAndAmountContainer>
        <CounterContainer>
          <MuiButton
            borderStyle="squared"
            variant="outlined"
            onClick={decrementAmount}
          >
            <RemoveIcon />
          </MuiButton>
          <MuiButton
            borderStyle="squared"
            variant="outlined"
            onClick={incrementAmount}
          >
            <AddIcon />
          </MuiButton>
        </CounterContainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
`;
const Title = styled.p`
  margin: 0;
  font-weight: 600px;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`;
const Amount = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  display: block;
`;

const PriceAndAmountContainer = styled.div`
  display: contents;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`;

const CounterContainer = styled.div`
  display: flex;
  gap: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;