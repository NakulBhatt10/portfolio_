import React from "react";
import "./Projects.css";

// ✅ Load all images from: src/assets/images
const images = require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/);

const getImage = (fileName) => {
  try {
    return images(`./${fileName}`);
  } catch (e) {
    console.warn("Image not found:", fileName);
    return "";
  }
};

const Projects = () => {
  const projectsData = [
    {
      title: "ParkLink",
      description:
        "ParkLink is a smart app that connects drivers with available rental parking spots, making parking simple, fast and hassle-free.",
      techStack: [
        "React, Redux, Redux Toolkit Thunk",
        "HTML, CSS, Javascript",
        "TypeScript",
        "ExpressJS and NodeJS REST API",
        "MongoDb Database",
        "Stripe Payment Integration",
        "Amazon Web Service (AWS) Deployment",
      ],
      // ✅ just write file name from src/assets/images
      photo: "parkl.png",
      liveLink: "https://parklink1.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/Parklink",
    },
    {
      title: "RAPID",
      description:
        "Response, Assistance, Protection, Information, Delivery — an app for quick help in natural or health calamities.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",
        "Firebase",
        "MongoDb Database",
        "React Native",
        "Google Maps API",
        "ai Chatbot",
        "AI for weather forecasting",
      ],
      photo: "rapid.png",
      liveLink: "https://rapid2.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/ui-rapid",
    },
    {
      title: "SionDrop",
      description:
        "SionDrop helps users book auto/taxi/walk routes from college to Sion station, connect with others and share ride fare.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",
        "MongoDb",
        "Google Maps API",
        "AI Chatbot",
      ],
      photo: "sion.png",
      liveLink: "https://siondrop.netlify.app",
      githubLink: "https://github.com/NakulBhatt10/ui-sionDrop",
    },

        {
      title: "Puzzle Wood",
      description:
        "PuzzleWood is a wooden puzzle and educational toy store website designed to make finding, adding, and purchasing learning toys quick and easy.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",
        "MongoDb",
        "Resend API",
        "Render",

      ],
      photo: "newup1.png",
      liveLink: "https://puzzlewood.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/baldaniya",
    },

            {
      title: "Mudra Loan",
      description:
        "Mudra Loan is a web app that helps users explore PMMY (MUDRA) loan options, check eligibility, and submit a loan application with document upload and application tracking.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",
        "MongoDb",
        "EmailJS",
        "Resend API",
        "Render",
      ],
      photo: "mudra.png",
      liveLink: "https://mudraloan1.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/mudra-loans",
    },



  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-content">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-text">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="project-detail">
                    <span className="detail-label">Tech Stack</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="tech-stack-list">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="tech-stack-item">
                      {tech}
                    </li>
                  ))}
                </ol>

                <div className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Website →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    GitHub Repo →
                  </a>
                </div>
              </div>

              <div className="project-image">
                <img src={getImage(project.photo)} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
