import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" class="education">
      <h2>Education</h2>
      {/* <div className="line-break"></div> */}

      <div class="education-item">
        <div class="degree-info">
          <h3>Bachelor of Science in Computer Science</h3>
          <p class="institution">University of Utah</p>
          <p class="graduation-date">August 2024</p>
        </div>

        <ul class="highlights">
          <li>
            Completed a senior capstone project with machine learning
            integration
          </li>
          <li>Participated in hackathons and coding competitions</li>
          <li>
            Relevant coursework: Data Structures, Algorithms, Artificial
            Intelligence
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
