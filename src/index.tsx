import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

// Cria uma API fake utilizando a biblioteca Mirage
createServer({
  models: {     //define um ou mais modelos de dados (tabelas)
    transaction: Model,
  },
  
  seeds(server) {   //carga inicial
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'entrada',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'saída',
          category: 'Despesas fixas',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ]
    })
  },

  routes() {    //define as rotas (get, post etc)
    this.namespace = 'api'

    this.get('/transactions', () => { //rota GET
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { //schema é o BD
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
    
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
