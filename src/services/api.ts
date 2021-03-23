import axios from 'axios'

export const api = axios.create({
  //baseURL: 'http://localhost:3000/api',
  baseURL: 'https://dtmoney-react.vercel.app/api',
})


/*
Utiliza a fake API MirageJs, por isso não precisa rodar o servidor em paralelo.
Para rodar localmente, use localhost
Para rodar na Vercel, use a segunda URL
*/
