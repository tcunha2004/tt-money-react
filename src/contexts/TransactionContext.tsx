import { createContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id?: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt?: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: Transaction) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    // Garantia: caso o server nao filtre
    if (query && query.trim()) {
      const normalizedQuery = query.trim().toLowerCase();
      const filtered = response.data.filter((transaction: Transaction) => {
        const description = transaction.description?.toLowerCase();
        return description.includes(normalizedQuery);
      });
      setTransactions(filtered);
      return;
    }

    setTransactions(response.data);
  }

  async function createTransaction(data: Transaction) {
    const { description, price, category, type } = data;

    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionsProvider;
