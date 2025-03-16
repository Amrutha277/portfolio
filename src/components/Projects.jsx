import React, { useState } from "react";
import "./Projects.css";

const categories = [
  { name: "Dev", tech: "React | Node.js | Redux | Firebase" },
  { name: "AI & ML", tech: "Python | TensorFlow | OpenCV | Reinforcement Learning" },
  { name: "Data Engineering", tech: "SQL | MongoDB | Redis | PostgreSQL" },
  { name: "Distributed Systems", tech: "Go | Raft | Sockets | Threads" },
];

const projects = {
  "Dev": [
    {
      title: "Web-based Recommender System",
      duration: "Jan 2022 - May 2022",
      details: [
        "Developed a recommendation engine that predicts user preferences for e-commerce.",
        "Implemented using Node.js & React, integrated Firebase for real-time data."
      ],
      tech: "React | Node.js | Firebase"
    }
  ],
  "AI & ML": [
    {
      title: "Sign Language Recognition",
      duration: "May 2023 - Aug 2023",
      details: [
        "Developed a model to recognize sign language gestures.",
        "Trained a CNN-based model using TensorFlow & OpenCV."
      ],
      tech: "Python | TensorFlow | OpenCV"
    }
  ],
  "Data Engineering": [
    {
      title: "High-Performance Key-Value Store",
      duration: "Oct 2022 - Dec 2022",
      details: [
        "Implemented a multi-threaded key-value store optimized for in-memory operations.",
        "Utilized Redis for caching, MongoDB for persistent storage."
      ],
      tech: "SQL | MongoDB | Redis"
    }
  ],
  "Distributed Systems": [
    {
      title: "Raft Leader Election Protocol",
      duration: "Oct 2023 - Jan 2024",
      details: [
        "Implemented Raft consensus algorithm for leader election.",
        "Simulated fault tolerance scenarios and election delays."
      ],
      tech: "Go | Raft | Distributed Systems"
    }
  ]
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="projects-container">
      <h2> </h2>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.name}>
          <div className={`category ${activeCategory === cat.name ? "open" : ""}`} onClick={() => toggleCategory(cat.name)}>
            {cat.name}
            <span>{activeCategory === cat.name ? "▲" : "▼"}</span>
          </div>
          <p className="category-tech">{cat.tech}</p>

          {/* Project List */}
          <div className={`projects-list ${activeCategory === cat.name ? "active" : ""}`}>
            {projects[cat.name]?.map((proj, index) => (
              <div key={index} className="project-card">
                <h4>{proj.title}</h4>
                <p className="duration">{proj.duration}</p>
                <ul>
                  {proj.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <p className="tech-stack">{proj.tech}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
