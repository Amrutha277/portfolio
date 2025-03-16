import "../index.css";

const Contact = () => (
  <div className="container">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" className="card" />
      <input type="email" placeholder="Your Email" className="card" />
      <textarea placeholder="Your Message" className="card"></textarea>
      <button className="button">Send</button>
    </form>
  </div>
);

export default Contact;
