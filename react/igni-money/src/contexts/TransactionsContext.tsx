import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const url = "http://localhost:3000/transactions";

    const response = await fetch(url);
    const data: Transactions[] = await response.json();

    const filteredData = query
      ? data.filter((transaction) => {
          const queryLower = query.toLowerCase();
          const queryNumber = parseFloat(query);

          return (
            transaction.description.toLowerCase().includes(queryLower) ||
            transaction.type.toLowerCase().includes(queryLower) ||
            transaction.category.toLowerCase().includes(queryLower) ||
            (transaction.price && transaction.price.toString().includes(query)) ||
            (!isNaN(queryNumber) && transaction.price === queryNumber)
          );
        })
      : data;

    // Ordena as transações por data, das mais recentes para as mais antigas
    const sortedData = filteredData.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    setTransactions(sortedData);
  }, []);

  const createTransactions = useCallback(async (data: CreateTransactionInput) => {
    const { description, price, category, type } = data;

    const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
