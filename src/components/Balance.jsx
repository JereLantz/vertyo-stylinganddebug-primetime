import React from 'react';

function Balance({ transactions }) {

    let balance = 0
    if(transactions.length > 0){
        balance = transactions.reduce((acc, curr) => acc + curr.amount, balance);
    }
  
  return (
    <div className="balance">
      <h2>Balance: ${balance}</h2>
    </div>
  );
}

export default Balance;
