import React, { useState } from 'react';
import './Gardenjournal.css';

const JournalEntryForm = ({ onAddEntry }) => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (entry.trim() !== '') {
      onAddEntry(entry);
      setEntry('');
    }
  };

  return (
    <div>
      <header class="header">
    <a href="#" class="logo">HomeGarden</a>
    <nav class="nav-items">
      <a href="home">Home</a>
      <a href="Gardenplanning">Garden Planning</a>
      <a href="remainder">Remainder</a>
      <a href="Gardenjournal">Garden Journal</a>
      {/* <a href="#">About</a> */}
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="reg">Register</a>
    </nav>
  </header>
    <main >
    <div className='bg007'>
      <h1 className='Gj'>Garden Journal</h1>
    <form className='journal' onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your journal entry here..."
        value={entry}
        onChange={handleInputChange}
      />
      <button type="submit">Add Journal</button>
    </form>
    </div>
  
 </main>
    </div>
    );
};

export default JournalEntryForm;
