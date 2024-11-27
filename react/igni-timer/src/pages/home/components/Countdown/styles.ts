import { styled } from "styled-components";

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
