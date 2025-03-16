// src/components/About.js
import React from "react";
import "./About.css"; // Import the CSS file for About section

const About = () => {
  return (
    <div className="about-container">
      <h2>A little deeper</h2>
      <p>
        I am <strong>Amrutha Varshini Ramireddy</strong>, a results-driven Software
        Engineer with a passion for building scalable, high-performance systems and
        delivering impactful software solutions. With 3 years of experience in
        full-stack development, distributed systems, and machine learning, I thrive in
        fast-paced, innovative environments where I can take full ownership of features
        from inception to deployment.
      </p>
      <p>
        I have a strong foundation in algorithms, computer architecture, networking, and
        database management. My expertise spans multiple technologies, including Java
        (Spring Boot, Microservices), Python, C++, React, REST APIs, SQL, MongoDB, Docker,
        Kubernetes, AWS, and DevOps. My experience in end-to-end feature development has
        enabled me to drive performance optimizations, reduce technical debt, and improve
        system efficiency.
      </p>

      <h3>What I Bring to the Table</h3>
      <ul>
        <li>
          <strong>Ownership &amp; Leadership</strong> – I take full responsibility for
          feature development, from design feedback, implementation, testing, and launch.
        </li>
        <li>
          <strong>Scalability &amp; Performance</strong> – I focus on designing highly
          scalable backend services and optimized frontend applications, ensuring
          efficient performance.
        </li>
        <li>
          <strong>Full-Stack Expertise</strong> – From backend microservices to frontend
          UI development, I have hands-on experience in architecting and implementing
          robust solutions.
        </li>
        <li>
          <strong>Machine Learning &amp; AI Applications</strong> – I have worked on
          ML-driven solutions, including credit default prediction models and sign
          language recognition using deep learning.
        </li>
        <li>
          <strong>Distributed Systems &amp; Consensus Protocols</strong> – I have
          implemented Raft Leader Election, Chandy-Lamport Distributed Snapshot Algorithm,
          and optimized fault-tolerant systems.
        </li>
        <li>
          <strong>DevOps &amp; Cloud</strong> – I ensure seamless deployments with CI/CD
          pipelines, Docker, Kubernetes, and AWS, reducing downtime and improving system
          resilience.
        </li>
      </ul>

      <h3>My Journey So Far</h3>
      <p>
        I earned my Master's in Computer Science at the University at Buffalo (GPA:
        4.0/4.0) and a B.Tech from NIT Surat. During my time at Oracle Financial Services
        Software, I worked extensively on core banking products, improving customer
        experience flows, optimizing API response times, and implementing secure payment
        gateway integrations.
      </p>
    </div>
  );
};

export default About;
