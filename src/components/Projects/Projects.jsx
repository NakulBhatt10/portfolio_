import React from 'react';
import './Projects.css';
import rapidBasketImage from '../../assets/images/parkl.png';
import chatAppImage from '../../assets/images/rapid.png';
import sionDrop from '../../assets/images/sion.png';


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "ParkLink ",
      description: "ParkLink is a smart app that connects drivers with available rental parking spots, making parking simple, fast and hassle-free.",
      techStack: [
        "React, Redux, Redux Toolkit Thunk",
        "HTML, CSS, Javascript",
        "TypeScript",
        "ExpressJS and NodeJS REST API",
        "MongoDb Database",
        "Stripe Payment Integration",
        "Amazon Web Service (AWS) Deployment"
      ],
      image: rapidBasketImage,
      liveLink: "https://parklink1.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/Parklink"
    },
    {
      id: 2,
      title: "RAPID",
      description: "Response, Assistance, Protection, Information, Delivery — an app for quick help in natural or health calamities.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",

        "Firebase",
        "MongoDb Database",
        "React Native",
        "Google Maps API",
        "ai Chatbot",
        "AI for weather forecasting"
      ],
      image: chatAppImage,
      liveLink: "https://rapid2.netlify.app/",
      githubLink: "https://github.com/NakulBhatt10/ui-rapid"
    },
    {
      id: 3,
      title: "SionDrop",
      description: "SionDrop is an app made for our university which basically helps the user to book and auto,taxi or just walking from our college to sion railway station.Helps user to connect with other users and share the ride fare or just make new friends.",
      techStack: [
        "React",
        "JavaScript",
        "HTML, CSS",
        
        "MongoDb",
        "Google Maps API",
        "AI Chatbot"
      ],
      image: sionDrop,
      liveLink: "https://siondrop.netlify.app",
      githubLink: "https://github.com/NakulBhatt10/ui-sionDrop "
    }    
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-content">
          {projectsData.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-text">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-details">
                  <div className="project-detail">
                    <span className="detail-label">Tech Stack</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="tech-stack-list">
                  {project.techStack.map((tech, index) => (
                    <li key={index} className="tech-stack-item">
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
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;