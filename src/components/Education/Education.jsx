import React from 'react';
import './Education.css';
import masterUniversity from '../../assets/images/Bachelor_University.jpg';
import bachelorUniversity from '../../assets/images/mITHI.jpg';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Technology - Mumbai University",
      course: "Artificial Intelligence and Data Science",
      duration: "August 2024 - May 2028",
      score: "Aimed to get First Class Honours",
      coreSubjects: [
        "Web Development",
        "C#(C Sharp)Programming",
        "Database Management",
        "Machine Learning and Modelling",
        "Cloud Computing",
        "Java Programming",
        "Data Structures and Algorithms",
        "Python Programming",
        "Data Science and Visualization"
      ],
      image: masterUniversity,
      visitLink: "https://kjsieit.somaiya.edu.in/"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      course: "computer science (Information Technology)",
      duration: "August 2022 - August 2024",
      score: "First Class Honours",
      coreSubjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "C/C++ Programming",
        "HTTP and Web Designing",
        "HTML and CSS",
      ],
      image: bachelorUniversity,
      visitLink: "https://mu.ac.in/"
    }
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        
        <div className="education-content">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-text">
                <h3 className="education-degree">
                  {edu.degree} {edu.university}
                </h3>
                {edu.course && (
                  <p className="education-course">
                    Course - {edu.course}
                  </p>
                )}
                
                <div className="education-details">
                  <div className="education-detail">
                    <span className="detail-label">Duration</span>
                    <span className="detail-value"> - {edu.duration}</span>
                  </div>
                  <div className="education-detail">
                    <span className="detail-label">Score</span>
                    <span className="detail-value"> - {edu.score}</span>
                  </div>
                  <div className="education-detail">
                    <span className="detail-label">Core subjects</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="core-subjects-list">
                  {edu.coreSubjects.map((subject, index) => (
                    <li key={index} className="core-subject-item">
                      {subject}
                    </li>
                  ))}
                </ol>

                <a 
                  href={edu.visitLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="visit-university-btn"
                >
                  Visit University Site →
                </a>
              </div>
              
              <div className="education-image">
                <img src={edu.image} alt={edu.university} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
