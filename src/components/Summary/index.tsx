import React from 'react'
import { Container } from './styles'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
//import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  //const { transactions } = useContext(TransactionsContext);
  const { transactions } = useTransactions()
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'entrada') {
      acc.entradas += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.saidas += transaction.amount      
      acc.total -= transaction.amount
    }
    return acc
  }, { entradas: 0, saidas: 0, total: 0 })

  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.entradas)}        
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>- 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.saidas)}        
        </strong>
      </div>
      
      <div className="divTotal">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}        
        </strong>
      </div>
      
    </Container>
  )
}