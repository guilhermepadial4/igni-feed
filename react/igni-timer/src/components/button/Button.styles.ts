import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;

  border-radius: 4px;
  border: none;

  margin-right: 8px;

  cursor: pointer;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`;
