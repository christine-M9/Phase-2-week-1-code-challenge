import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from db.json using fetch
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>My Transactions</h1>
      {transactions.length > 0 ? (
        <TransactionTable transactions={transactions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
