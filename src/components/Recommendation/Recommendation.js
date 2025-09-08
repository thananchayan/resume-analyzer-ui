import React from "react";
import "./Recommendation.css";

const Recommendation = ({ jobRole, skills }) => {
  const dummyCourses = [
    "Python and Django Full Stack Web Developer Bootcamp",
    "Become a React Developer by Udacity",
    "Django Crash Course [Free]",
    "ReactJS Project Development Training",
    "Full Stack Web Developer by Udacity"
  ];

  return (
    <div className="recommend-container">
      <h2 className="section-title">Skills Recommendation 💡</h2>

      {/* Job Role */}
      {jobRole && <p className="analysis-note">Our analysis says you are suitable for <strong>{jobRole}</strong></p>}

      {/* Recommended Skills */}
      <h3>Recommended Skills for You</h3>
      <div className="skill-box">
        {skills && skills.length > 0 ? (
          skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))
        ) : (
          <p>No recommended skills found.</p>
        )}
      </div>

      {/* Courses */}
      {/* <h2 className="section-title">Courses & Certificates Recommendations 🎓</h2>
      <ul>
        {dummyCourses.map((course, i) => (
          <li key={i}>
            <a href="#" target="_blank" rel="noreferrer">{course}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Recommendation;
