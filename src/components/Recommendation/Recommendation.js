// src/components/Recommendation.js
import React from "react";
import "./Recommendation.css";

const Recommendation = ({ jobRole, skills }) => {
  const dummyCurrentSkills = [
    "Python", "CSS", "SQL", "Engineering", "Database",
    "HTML", "Javascript", "Github"
  ];
  const dummyRecommendedSkills = [
    "React", "Django", "Node.js", "PHP", "Laravel", "Flask"
  ];
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

      {/* Current Skills */}
      <h3>Your Current Skills</h3>
      <div className="skill-box">
        {dummyCurrentSkills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
      <p className="analysis-note">
        ** Our analysis says you are looking for Web Development Jobs **
      </p>

      {/* Recommended Skills */}
      <h3>Recommended Skills for You</h3>
      <div className="skill-box">
        {(skills || dummyRecommendedSkills).map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>

      {/* Courses */}
      <h2 className="section-title">Courses & Certificates Recommendations 🎓</h2>
      <ul>
        {dummyCourses.map((course, i) => (
          <li key={i}>
            <a href="#" target="_blank" rel="noreferrer">{course}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
