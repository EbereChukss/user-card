import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div style={styles.card}>
      <img 
        src="data:image/jpeg;base64,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" 
        alt="User Avatar" 
        style={styles.avatar} 
      />
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.email}>{email}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    borderRadius: '50%',
    marginRight: '16px',
  },
  info: {
    textAlign: 'left',
    color: '#E11584',
  },
  name: {
    fontSize: '1.5em',
    margin: '0',
  },
  email: {
    color: '#555',
    margin: '5px 0 0',
  }
};

export default UserCard;