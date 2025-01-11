import "../styles/About.css";
// import layla from "/images/layla.jpg";
// import layla from "/images/layla.png";
// import image from "../assets/images/avatar-hair.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src="/images/layla.jpg" className="about-photo">
        {/* Photo<img src="/images/layla.jpg"></img> */}
      </img>
      <div className="about-content">
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hi! I'm a recent Computer Science graduate with a passion for creating software that solves real-world problems. I really enjoy learning
            new technologies and tackling new challenges. Currently, I’m looking for a role where I can apply my skills and continue to grow as a
            developer.
          </p>
          <button className="resume-btn">
            <i class="fa-solid fa-download download-icon"></i> Download Resume
          </button>
        </div>
        <div className="interests-education">
          <div>
            <h3>Interests</h3>
            <ul>
              <li>Database Systems</li>
              <li>Web Development</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div>
              <i class="fa-solid fa-graduation-cap grad-cap"></i>
              <div>
                <p>B.S. Computer Science</p>
                <p>University of Utah</p>
                <p>Aug 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="about" className="about">
    //   {/* <img src={image} className="avatar"></img> */}
    //   <div className="about-content">
    //     <h2>About Me</h2>
    //     <p>
    //       Hi! I'm a recent Computer Science graduate with a passion for creating software that solves real-world problems. I love learning new
    //       technologies and tackling new challenges. Currently, I’m looking for a role where I can apply my skills and continue to grow as a developer.
    //     </p>
    //   </div>
    //   {/* <div className="invisible"></div> */}
    // </section>
  );
};

export default About;
