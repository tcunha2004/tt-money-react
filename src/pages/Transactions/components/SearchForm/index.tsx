import { FaMagnifyingGlass } from "react-icons/fa6";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

interface FormData {
  query: string;
}

function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>();

  async function handleSearchTransactions(data: FormData) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(data.query);
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
