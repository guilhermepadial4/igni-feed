import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;

  border-radius: 6px;

  background: ${(props) => props.theme["gray-800"]};

  padding: 2.5rem 3rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;
  }

  input {
    color: ${(props) => props.theme["gray-300"]};

    background: ${(props) => props.theme["gray-900"]};

    border-radius: 6px;
    border: 0;

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button[type="submit"] {
    color: ${(props) => props.theme.white};
    font-weight: 700;

    height: 58px;

    background: ${(props) => props.theme["green-500"]};

    border: 0;
    border-radius: 6px;

    margin-top: 1.5rem;

    padding: 0 1.25rem;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;

      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-700"]};
      transition: background-color 0.2s;
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  font-size: 0;
  color: ${(props) => props.theme["gray-500"]};

  background: transparent;

  border: none;

  cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`;

interface TransactionTyppeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTyppeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme["gray-300"]};

  background: ${(props) => props.theme["gray-700"]};

  border-radius: 6px;
  border: none;

  padding: 1rem;

  cursor: pointer;

  svg {
    color: ${(props) => (props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"])};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};

    background: ${(props) => (props.variant === "income" ? props.theme["green-500"] : props.theme["red-500"])};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
