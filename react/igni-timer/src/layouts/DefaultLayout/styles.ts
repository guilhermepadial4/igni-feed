import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 74rem;
  min-height: calc(100vh - 10rem);

  background-color: ${(props) => props.theme["gray-800"]};

  border-radius: 8px;

  margin: 5rem auto;

  padding: 2.5rem;

  overflow-y: auto;
`;
