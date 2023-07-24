import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetching data from db.json using fetch
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    // creating a new ID for the transaction
    const newId = transactions.length + 1;

    // Creating new transaction object with new ID
    const transactionToAdd = {
      id: newId,
      ...newTransaction,
    };

    // Adding new transaction to the state
    setTransactions((prevTransactions) => [...prevTransactions, transactionToAdd]);
  };

  return (
    <div>
      <h1>My Transactions</h1>
      {transactions.length > 0 ? (
        <TransactionTable transactions={transactions} onAddTransaction={addTransaction} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
