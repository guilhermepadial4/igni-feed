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
