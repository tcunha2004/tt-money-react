import { MdCurrencyExchange } from "react-icons/md";
import { SummaryCard, SummaryContainer } from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContexts";
import { priceFormatter } from "../../utils/formatter";

function Summary() {
  const { transactions } = useContext(TransactionContext);

  const pricesSummary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "income") {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <FaRegArrowAltCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(pricesSummary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <FaRegArrowAltCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(pricesSummary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <MdCurrencyExchange size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(pricesSummary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

export default Summary;
