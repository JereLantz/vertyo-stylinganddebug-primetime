import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    const transaction = {
      id: Math.random(),
      text: text,
      amount: +amount
    };
    onAdd(transaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="transaction-form">
      <div className=''>
        <label className='font-bold'
      >Text</label>
        <input className="bg-white w-60"
      type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label className='font-bold'>Amount</label>
        <input className="bg-white w-60"
      type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button className=""
      type="submit" onClick={handleSubmit}>Add Transaction</button>
    </div>
  );
}

export default TransactionForm;
