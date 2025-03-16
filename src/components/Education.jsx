import React from "react";
import "./Education.css";

const educationData = [
  {
    institution: "University at Buffalo, SUNY",
    degree: "Master of Science in Computer Science",
    duration: "Jan 2024 - May 2025",
    gpa: "GPA: 3.9/4.0",
    courses: [
      "Machine Learning",
      "Distributed Systems",
      "Database Systems",
      "Cloud Computing",
      "Analysis of Algorithms",
      "Computer Architecture",
      "Modern Networking Concepts"
    ],
  },
  {
    institution: "National Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    duration: "Aug 2016 - May 2020",
    courses: [
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence",
      "Data Structures & Algorithms",
      "Compiler Design",
    ],
  },
];

const Education = () => {
    return (
      <div className="education-container">
        <h2>Education</h2>
  
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="duration">{edu.duration}</p>
            <p className="gpa">{edu.gpa}</p>
            <p className="course-title">Relevant Courses:</p>
            <div className="course-list">
              {edu.courses.map((course, idx) => (
                <span key={idx} className="course-item">{course}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default Education;