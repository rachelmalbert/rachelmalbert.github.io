import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>
          If you would like to work together or have any questions, feel free to
          reach out!
        </p>
        <a href="mailto:your-email@example.com" className="contact-button">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
