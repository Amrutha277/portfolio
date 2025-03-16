import "../index.css";
import profile from "../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import About from "../components/About";
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

      {/* Right - Text and Social Links */}
      <div className="home-text">
        <h1>Amrutha Varshini Ramireddy</h1>
        <p>
          I am passionate about building impactful software, optimizing complex systems, and constantly learning and experimenting with new technologies. Whether it's database optimization, high-concurrency systems, or AI-driven solutions, I enjoy solving challenging problems and delivering high-quality software.
          Let's connect and build something great together!
        </p>

        {/* Social Links Below the Text */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/amrutha-varshini-ramireddy-906034328/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="mailto:aramired@buffalo.edu">
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
          <a
            href="https://github.com/Amrutha277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </div>
      </div>
    </div>

    {/* Scrollable Sections Below */}
    <div className="scrollable-sections">
      <About></About>
      <Skills />
      <Education />
      <Projects />
    </div>
  </div>
);

export default Home;
