import { MdCurrencyExchange } from "react-icons/md";
import { SummaryCard, SummaryContainer } from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <FaRegArrowAltCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 18.007,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <FaRegArrowAltCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 18.007,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <MdCurrencyExchange size={32} color="#fff" />
        </header>
        <strong>R$ 18.007,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}

export default Summary;
