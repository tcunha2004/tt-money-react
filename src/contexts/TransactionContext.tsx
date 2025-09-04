import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3000/transactions");

    if (query && query.trim()) {
      url.searchParams.set("q", query);
    }

    const response = await fetch(url);
    const data: Transaction[] = await response.json();

    // Garantia: caso o server nao filtre
    if (query && query.trim()) {
      const normalizedQuery = query.trim().toLowerCase();
      const filtered = data.filter((transaction) => {
        const description = transaction.description?.toLowerCase();
        return description.includes(normalizedQuery);
      });
      setTransactions(filtered);
      return;
    }

    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionsProvider;
