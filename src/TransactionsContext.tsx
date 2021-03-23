import { createContext, useState, useEffect, ReactNode } from 'react'
import { api } from './services/api'

type Transaction = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>

/*
type NewTransaction = {
  title: string;
  type: string;
  category: string;
  amount: number;
}
*/

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = 
  createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(newTransaction: NewTransaction) {        
    const response = await api.post('/transactions', {
      ...newTransaction, 
      createdAt: new Date()
    }) 
    
    const { transaction } = response.data    
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}  

