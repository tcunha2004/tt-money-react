import { FaMagnifyingGlass } from "react-icons/fa6";
import { SearchFormContainer } from "./styles";

function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <FaMagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

export default SearchForm;
