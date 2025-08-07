import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/TLogo.svg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} height={80} />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
