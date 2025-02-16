import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    chrome.storage.local.set({ userEmail: email }, () => {
      alert('Email saved successfully!');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter your email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EmailForm;