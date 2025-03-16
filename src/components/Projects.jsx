// src/components/Projects.js
import React, { useState } from "react";
import "./Projects.css";

// Minimal array of projects (title, details, tech, duration optional)
const projectsData = [
  {
    title: "Raft Leader Election Protocol Implementation",
    details: [
      "Developed the leader election phase of the Raft consensus protocol for a fault-tolerant key/value storage system.",
      "Implemented randomized election timeouts and RequestVote RPCs to elect a leader in a distributed system.",
      "Designed heartbeat mechanisms using AppendEntries RPCs to ensure leadership stability and reset election timeouts.",
      "Achieved fault tolerance with automatic recovery and re-election of a leader after network partitions or server crashes.   Validated the implementation against provided test cases, passing scenarios for initial elections and re-elections post-failures."
    ],
    tech: "GoLang"
  },
  {
    title: "Chandy-Lamport Distributed Snapshot Algorithm",
    details: [
      "Implemented a fault-tolerant distributed snapshot algorithm for token-passing systems based on the Chandy-Lamport protocol.",
      "Designed a simulation framework to test snapshot consistency in distributed systems, ensuring accurate recording of process and channel states. ",
      " Integrated marker message propagation and token management with FIFO communication channels to achieve system-wide consistent snapshots. ",
    ],
    tech: "GoLang"
  },
  {
    title: "Sign Language Recognition",
    details: [
      "Engineered a deep learning model to translate American Sign Language into text with 92% accuracy, utilizing TensorFlow for training and OpenCV for real-time image processing",
      "Leveraged TensorFlow for model training and OpenCV for real-time image processing, providing enhanced accessibility solutions for individuals with hearing impairments. ",
      "Overcame variations in hand shapes and lighting by applying data augmentation (e.g., rotation, brightness adjustments) and adaptive thresholding in preprocessing, ensuring consistent detection. "
    ],
    tech: "Python | TensorFlow | OpenCV"
  },
  {
    title: "Treasure Hunt RL Grid Optimization",
    details: [
      "Designed RL Grid Environment using SARSA, Q Learning, and N-Step Double Q Learning.",
      "Applied advanced reward shaping and exploration strategies to improve policy convergence."
    ],
    tech: "Python | TensorFlow | Reinforcement Learning"
  },
  {
    title: "Scheduling, system calls on PintOS",
    details: [
      "Implemented Multi threading, synchronization and system call management in Stanford's PINTOS framework enhancing the operating system's scheduling functionality.  ",
      "Resolved race conditions in shared memory access using mutex locks and thread-safe queueing mechanisms, ensuring reliable multithreaded operations  "
    ],
    tech: "C++ | multithreading | memory management"
  },
  {
    title: "Multi client - server text chat application",
    details: [
      "Developed a secure, multi-client text-based chat application over TCP/IP for reliable communication. The application featured real-time broadcasting, as well as blocking and unblocking functionalities, implemented via socket programming.",
      "The solution demonstrated reliable performance for up to 50 simultaneous clients, suitable for enterprise-level communication. ",
      "Enhanced concurrency management through epoll-based I/O multiplexing for enterprise use."
    ],
    tech: "C++ | multithreading | memory management"
  },
  {
    title: "Raft Leader Election Protocol",
    details: [
      "Implemented the Raft consensus algorithm for leader election.",
      "Simulated fault tolerance scenarios and election delays."
    ],
    tech: "Go | Raft | Distributed Systems"
  }
];

const Projects = () => {
  // Track which project index is expanded (or null if none)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h2>Acadamic Projects</h2>
      <div className="projects-grid">
        {projectsData.map((proj, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="project-card">
              <h4>{proj.title}</h4>
              {/* Show duration if available */}
              {proj.duration && <p className="duration">{proj.duration}</p>}

              {/* Tech stack always visible */}
              <p className="tech-stack">{proj.tech}</p>

              {/* Button to toggle details */}
              <button className="details-btn" onClick={() => toggleDetails(index)}>
                {isExpanded ? "Hide Details" : "View Details"}
              </button>

              {/* Conditionally show details if expanded */}
              {isExpanded && (
                <ul className="project-details">
                  {proj.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
