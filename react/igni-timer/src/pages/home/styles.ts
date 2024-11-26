import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

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

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  span {
    background-color: ${(props) => props.theme["gray-700"]};

    border-radius: 8px;

    padding: 2rem 1rem;
  }
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme["green-500"]};

  width: 4rem;
  overflow: hidden;

  padding: 2rem 0;
`;

export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};

  width: 100%;

  border: none;
  border-radius: 8px;

  padding: 1rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["green-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
`;
