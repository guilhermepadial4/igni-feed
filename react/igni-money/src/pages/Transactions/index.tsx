import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { TransactionsContainer, TransactionsTable, PriceHighLight } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/11/2024</td>
            </tr>

            <tr>
              <td width="50%">Pizza</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 58,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>15/11/2024</td>
            </tr>

            <tr>
              <td width="50%">Aluguel ap</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
              </td>
              <td>Casa</td>
              <td>05/11/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
