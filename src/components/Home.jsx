import "../index.css";
import profile from "../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Navbar from "../components/Navbar";

const Home = () => (
  <div>
    {/* Fixed Navbar */}
    <Navbar />

    {/* Home Section */}
    <div className="home-container">
      {/* Left - Profile Image */}
      <div className="home-image">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>

      {/* Center - Name, Description, and Skills */}
      <div className="home-text">
        <h1>Amrutha Varshini Ramireddy</h1>
        <p>
          I'm a Software Engineer driven by innovation, problem-solving, and the
          pursuit of building impactful, high-performance applications.
        </p>

        {/* Skills Section (Plain Text, Horizontal, Dark Blue) */}
        {/* <p className="skills-text">
          <strong>Languages:</strong> Python | Java | C++ <br />
          <strong>Frameworks:</strong> React | Node.js | Express.js <br />
          <strong>Technologies:</strong> Machine Learning | Databases | Distributed Systems
        </p> */}
      </div>

      {/* Right - Social Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/amrutha-varshini-ramireddy-906034328/" 
           target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="mailto:aramired@buffalo.edu">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
        </a>
        <a href="https://github.com/Amrutha277" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
    </div>

    {/* Scrollable Sections Below */}
    <div className="scrollable-sections">
      <Skills />
      <Education />
      <Projects />
    </div>
  </div>
);

export default Home;
