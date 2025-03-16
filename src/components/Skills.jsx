import React from "react";
import "./Skills.css";

const skillCategories = {
  "Languages": ["Python", "C++", "Java", "JavaScript", "Go"],
  "Frameworks & Libraries": ["React.js", "Node.js", "TensorFlow", "PyTorch", "Redux"],
  "Databases": ["SQL", "PostgreSQL", "MongoDB", "Redis"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Terraform"],
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>

      {/* Skill Categories (Always Expanded) */}
      {Object.keys(skillCategories).map((category) => (
        <div key={category}>
          <div className="skill-category">{category}</div>
          <div className="skills-list">
            {skillCategories[category].map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
