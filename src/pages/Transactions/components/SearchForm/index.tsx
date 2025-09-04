import { FaMagnifyingGlass } from "react-icons/fa6";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { TransactionContext } from "../../../../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

interface FormData {
  query: string;
}

function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  async function handleSearchTransactions(data: FormData) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <FaMagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

export default SearchForm;
