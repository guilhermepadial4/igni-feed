import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};

  padding: 2rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  padding: 0 1.5rem;
`;

export const NewTransactionButton = styled.button`
  font-weight: 700;
  color: ${(props) => props.theme.white};

  height: 50px;

  background-color: ${(props) => props.theme["green-500"]};

  border: none;
  border-radius: 6px;

  padding: 0 1.25rem;

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
