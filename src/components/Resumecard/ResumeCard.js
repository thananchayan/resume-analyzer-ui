import React from "react";
import "./ResumeCard.css";

const ResumeCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="resume-card">
      <h3>{data.name}</h3>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <p>
        <strong>Experience Level:</strong> {data.experience}
      </p>
    </div>
  );
};

export default ResumeCard;
