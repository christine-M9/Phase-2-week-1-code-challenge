import React, { useState } from 'react';

const TransactionTable = ({ transactions, onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const [searchWord, setSearchWord] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div>
      <h2>Transaction Table</h2>
      <div>
        <label>
          Search Transactions:
          <input
            type="text"
            value={searchWord}
            onChange={handleSearch}
            placeholder="Search by description..."
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required />
        </label>
        <button type="submit">Click to Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionTable;

     