import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/TLogo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionalModal from "../NewTransactionalModal";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} height={80} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionalModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
