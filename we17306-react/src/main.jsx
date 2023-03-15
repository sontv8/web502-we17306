import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

const a = 10;
const b = 20;
function sum(a, b) {
  return a + b;
}
function Sum({ a, b }) {
  return +a + +b
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />

)
