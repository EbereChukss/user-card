import React, { useState } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => setName(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Greet</button>
      </form>
      {greeting && <p style={styles.greeting}>{greeting}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    width: '100%',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    borderRadius: '5px',
    backgroundColor: '#228B22',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  greeting: {
    marginTop: '20px',
    fontSize: '1.25em',
    fontWeight: 'bold',
    color: '#333',
  }
};

export default GreetingForm;
