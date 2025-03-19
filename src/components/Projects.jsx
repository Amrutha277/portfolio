// src/components/Projects.js
import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Raft Leader Election Protocol Implementation",
    details: [
      "Developed the leader election phase of the Raft consensus protocol for a fault-tolerant key/value storage system.",
      "Implemented randomized election timeouts and RequestVote RPCs to elect a leader in a distributed system.",
      "Designed heartbeat mechanisms using AppendEntries RPCs to ensure leadership stability and reset election timeouts.",
      "Achieved fault tolerance with automatic recovery and re-election of a leader after network partitions or server crashes. Validated the implementation against provided test cases, passing scenarios for initial elections and re-elections post-failures."
    ],
    tech: "GoLang"
  },
  {
    title: "Chandy-Lamport Distributed Snapshot Algorithm",
    details: [
      "Implemented a fault-tolerant distributed snapshot algorithm for token-passing systems based on the Chandy-Lamport protocol.",
      "Designed a simulation framework to test snapshot consistency in distributed systems, ensuring accurate recording of process and channel states.",
      "Integrated marker message propagation and token management with FIFO communication channels to achieve system-wide consistent snapshots."
    ],
    tech: "GoLang"
  },
  {
    title: "Sign Language Recognition",
    details: [
      "Engineered a deep learning model to translate American Sign Language into text with 92% accuracy.",
      "Leveraged TensorFlow for model training and OpenCV for real-time image processing, providing enhanced accessibility solutions.",
      "Applied data augmentation and adaptive thresholding to overcome variations in hand shapes and lighting, ensuring consistent detection."
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
      "Implemented multi-threading, synchronization, and system call management in Stanford's PINTOS framework to enhance OS scheduling functionality.",
      "Resolved race conditions in shared memory access using mutex locks and thread-safe queues, ensuring reliable operations."
    ],
    tech: "C++ | Multithreading | Memory Management"
  },
  {
    title: "Multi client-server text chat application",
    details: [
      "Developed a secure, multi-client text-based chat application over TCP/IP with real-time broadcasting.",
      "Implemented blocking/unblocking functionalities and ensured reliable communication using socket programming.",
      "Enhanced concurrency using epoll-based I/O multiplexing to support up to 50 simultaneous clients."
    ],
    tech: "C++ | Multithreading | Sockets"
  }
];

const Projects = () => {
  // State to track which project's details are open in the modal (null if none)
  const [modalProjectIndex, setModalProjectIndex] = useState(null);

  const openModal = (index) => {
    setModalProjectIndex(index);
  };

  const closeModal = () => {
    setModalProjectIndex(null);
  };

  return (
    <div className="projects-container">
      <h2>Academic Projects</h2>
      <div className="projects-grid">
        {projectsData.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h4>{proj.title}</h4>
              <p className="tech-stack">{proj.tech}</p>
            </div>
            <button className="details-btn" onClick={() => openModal(index)}>
              View Details
            </button>
          </div>        
        ))}
      </div>

      {/* Modal Pop-Up */}
      {modalProjectIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h4>{projectsData[modalProjectIndex].title}</h4>
            <p className="tech-stack">{projectsData[modalProjectIndex].tech}</p>
            <ul className="project-details">
              {projectsData[modalProjectIndex].details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
