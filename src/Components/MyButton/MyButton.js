import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  background: ${({ $rangi }) => $rangi || "#fff"};
  color: ${({ $variant }) => ($variant === "dark" ? "#fff" : "#000")};
  border: 1px solid transparent;
  padding: 12px 20px;
  font-weight: 600;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 10px;
  }
  &:hover {
    border: 1px solid ${({ $rangi }) => $rangi || "#000"};
  }
  &:active {
    transform: scale(0.95);
  }
`;

function MyButton({ onClick, onSubmit, icon, className, title, variant, rangi }) {
  return (
    <StyledBtn
      onClick={onClick}
      onSubmit={onSubmit}
      className={className}
      $variant={variant}
      $rangi={rangi}
    >
      {icon}
      <span>{title}</span>
    </StyledBtn>
  );
}


export default MyButton;
