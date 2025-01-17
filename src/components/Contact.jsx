import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div class="contact-container">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via any of the following platforms:</p>
        <div class="contact-links">
          <a href="mailto:albert.rachelm@gmail.com" class="contact-link" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email Icon" />
            <span>Email</span>
          </a>

          <a href="https://www.linkedin.com/in/rachel-albert/" class="contact-link" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn Icon" />
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com/rachelmalbert" class="contact-link" target="_blank">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub Icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>

    // <section id="contact" className="contact">
    //   <div className="contact-content">
    //     <h2>Contact</h2>
    //     <p>Feel free to reach out, I would love to hear from you!</p>
    //     <a href="mailto:albert.rachelm@gmail.com" className="contact-button">
    //       Email Me
    //     </a>
    //   </div>
    // </section>
  );
};

export default Contact;
