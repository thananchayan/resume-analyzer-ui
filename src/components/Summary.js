// src/components/Summary.js
import React from 'react';

const Summary = ({ summary }) => {
  if (!summary) return null;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Summary;
