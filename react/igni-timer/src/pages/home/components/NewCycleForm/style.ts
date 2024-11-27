import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};

  width: 100%;
`;

const BaseInput = styled.input`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};

  height: 2.5rem;

  background: transparent;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};

  padding: 0.5rem;

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;