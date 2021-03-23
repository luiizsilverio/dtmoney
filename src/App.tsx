/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'
//import { TransactionsProvider } from './TransactionsContext'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (    
    <TransactionsProvider>
      <Header onNewTransaction={handleOpenNewTransactionModal} />
      
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
