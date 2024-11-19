import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "sucess";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  sucess: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;

  border-radius: 4px;
  border: none;

  margin-right: 8px;

  cursor: pointer;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }} */
`;
