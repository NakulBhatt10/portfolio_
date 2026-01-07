import React from "react";
import "./Experience.css";

const Experience = () => {
  const experienceData = [
    {
      role: "Web Developer Intern",
      org: "PuzzleWood",
      type: "Internship",
      duration: "Internship",
      timeline: "2025",
      location: "Mumbai, India",
      points: [
        "Built and improved key e-commerce screens for puzzle wood (Home, Product listing, Cart, Checkout).Implemented Cart features: add/remove items, quantity increment/decrement, and dynamic order summary calculations.",
        "Solution for payment gateway ,whatsapp integration for better communication",
        "Improved overall performance and responsiveness.",
      ],
      tech: ["React", "JavaScript", "CSS", "HTML","Whatsapp integration"],
    },
    {
      role: "Software Developer Intern",
      org: "OM Solutions",
      type: "Internship",
      duration: "Internship",
      timeline: "2025",
      location: "Mumbai, India",
      points: [
        "Built a Mudra Loan web app that lets users explore PMMY categories (Shishu/Kishore/Tarun), check eligibility, and apply through a guided form.",
        "Implemented an end-to-end application flow with validation, document/KYC upload and which directtly gets sent to our email id using EmailJS",
        "Developed an admin side to review applications, verify documents and update approval status to streamline the process.",
      ],
      tech: ["React", "Node.js", "Express", "REST API","Resend API","Render","HTML","CSS","JS"],
    },
    {
      role: "Technical Lead (Marketing Team)",
      org: "S4DS Club (University)",
      type: "Leadership",
      duration: "Club",
      timeline: "Present",
      location: "University",
      points: [
        "Led technical tasks for the marketing team and handled web/creative tech requirements.",
        "Managed event/announcement assets and improved team execution with tooling/workflows.",
        "Coordinated with core members to support campaigns and club initiatives.",
      ],
      tech: ["Team Leadership", "Web", "Design + Tech"],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Internships and leadership roles that shaped my development and teamwork skills.
        </p>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div className="exp-card" key={index}>
              <div className="exp-dot" />
              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <p className="exp-org">
                      <span className="exp-org-name">{item.org}</span>
                      <span className="exp-sep">•</span>
                      <span className="exp-type">{item.type}</span>
                    </p>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-chip">{item.timeline}</span>
                    <span className="exp-location">{item.location}</span>
                  </div>
                </div>

                <ul className="exp-points">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {item.tech.map((t, i) => (
                    <span className="exp-badge" key={i}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* optional divider to match your page sections */}
        <div className="experience-divider" />
      </div>
    </section>
  );
};

export default Experience;
