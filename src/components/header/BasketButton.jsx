import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";
import MuiButton from "../UI/Button";

const BusketButton = ({ count, ...props }) => {
  return (
    <StyledButton {...props}>
      <BasketIcon />
      <StyledTitle>You Cart</StyledTitle>
      <StyledCounter id="counter">{count}</StyledCounter>
    </StyledButton>
  );
};

export default BusketButton;

const StyledButton = styled(MuiButton)(() => ({
  backgroundColor: "#5a1f08",
  color: "#fff",
  borderRadius: "1.30rem",
  padding: "0.75rem 2 rem",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "#2c0d00",
  },
  "&:hover > #counter": {
    backgroundColor: "#662207",
  },
  "&.bump": {
    animation: "bump 300ms ease-out",
  },
  "@keyframes bump": {
    "0%": {
      transform: "scale(1)",
    },
    "10%": {
      transform: "scale(0.9)",
    },
    "30%": {
      transform: "scale(1.1)",
    },
    "50%": {
      transform: "scale(1.15)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

const StyledTitle = styled.span`
  margin: 0 1.5rem 0 0.75rem;
`;

const StyledCounter = styled.span`
  background: #8a2b06;
  border-radius: 1.875rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.6875rem;
  padding: 0.25rem 1.25rem;
`;
