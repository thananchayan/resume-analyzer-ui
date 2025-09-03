// src/components/ResumeCard.js
import React from 'react';

const ResumeCard = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px 0' }}>
      <h3>{data.name}</h3>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Experience Level:</strong> {data.experience}</p>
    </div>
  );
};

export default ResumeCard;
