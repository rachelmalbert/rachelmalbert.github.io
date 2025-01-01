import "../styles/About.css";
// import image from "../assets/images/avatar-hair.png";

const About = () => {
  return (
    <section id="about" className="about">
      {/* <img src={image} className="avatar"></img> */}
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi! I'm a recent Computer Science graduate with a passion for creating software that solves real-world problems. I love learning new
          technologies and tackling new challenges. Currently, I’m looking for a role where I can apply my skills and continue to grow as a developer.
        </p>
      </div>
      {/* <div className="invisible"></div> */}
    </section>
  );
};

export default About;
