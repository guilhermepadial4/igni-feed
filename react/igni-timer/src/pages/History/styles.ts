import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 3.5rem;

  h1 {
    font: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;

  margin-top: 2rem;

  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: center;
      color: ${(props) => props.theme["gray-100"]};

      background-color: ${(props) => props.theme["gray-600"]};

      padding: 1rem;

      &:first-child {
        border-top-left-radius: 8px;

        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;

        padding-right: 1.5rem;
      }
    }

    td {
      font-size: 0.875rem;
      line-height: 1.6;

      background-color: ${(props) => props.theme["gray-700"]};

      border-top: 4px solid ${(props) => props.theme["gray-800"]};

      padding: 1rem;

      &:first-child {
        width: 50%;

        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;
