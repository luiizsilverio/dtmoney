import axios from 'axios'

export const api = axios.create({
  //baseURL: 'http://localhost:3000/api',
  baseURL: 'https://dtmoney-chi.vercel.app:3000/api',
})