import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([{id:2,text:"fjskl",amount:69}]);

  const addTransaction = (transaction) => {
    setTransactions((p)=>[transaction,...p]);
  };

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id != id));
  };

  return (
    <div className="App bg-amber-50">
      <img src={logo} alt="Budget Tracker Logo" className="logo" />
      <Header tittle="Budget Tracker" />
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} onRemove={removeTransaction} />
    </div>
  );
}

export default App;
