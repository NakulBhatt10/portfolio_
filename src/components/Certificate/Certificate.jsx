import React from 'react';
import './Certificate.css';
import b1 from '../../assets/images/dataanalysis.png';
import b2 from '../../assets/images/oracle1.png';

import b6 from '../../assets/images/b5.png';
import b8 from '../../assets/images/michigan.png';



const Certificate = () => {
  const certificates = [
    {
      id: 1,
      name: "Data Analysis with Python",
      image: b1,
      score: "Certified",
      description: "Data Analysis with Python by IBM",
      link: "https://www.credly.com/badges/0c2b9ac0-aafe-4ea4-9aac-fa2fecbb4a4a/public_url"
    },
    {
      id: 2,
      name: "OCI AI Foundations",
      image: b2,
      score: "Certified",
      description: "OCI AI Foundations",
      link: "https://mylearn.oracle.com/ou/learning-path/become-a-oci-ai-foundations-associate-2025/147781"
    },
    {
      id: 3,
      name: "OCI Generative AI",
      image: b2,
      score: "95%",
      description: "Data science by IBM",
      link: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-generative-ai-professional-2025/147863"
    },
    {
      id: 4,
      name: "Oracle AI Vector Search",
      image: b2,
      score: "91%",
      description: "Machine Learning by IBM",
      link: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-ai-vector-search-professional/144854"
    },
    {
      id: 5,
      name: "OCI Data Science",
      image: b2,
      score: "95%",
      description: "Specialization by Coursera",
      link: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-data-science-professional-2025/148474"
    },
    {
      id: 6,
      name: "React Basics by Coursera",
      image: b6,
      score: "90%",
      description: "Specialization by Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/WGSFF4MB7RT5"
    },
    {
      id: 6,
      name: "Data Analysis with Python",
      image: b6,
      score: "90%",
      description: "Specialization by IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/QQ28Z4X2W9GM"
    },
    {
      id: 6,
      name: "Interactivity with JavaScript",
      image: b8,
      score: "90%",
      description: "Specialization by UNIVERSITY OF MICHIGAN",
      link: "https://www.coursera.org/account/accomplishments/verify/RAL39DT3WU62"
    },
    {
      id: 6,
      name: "Python for Data Science, AI & Development",
      image: b6,
      score: "90%",
      description: "Specialization by IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/4NAH6BELTZJ2"
    }    
  ];

  return (
    <section className="certificate-section" id="certificate">
      <div className="certificate-container">
        <h2 className="certificate-title">Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.name} />
              </div>
              <div className="certificate-info">
                <h3 className="certificate-name">{cert.name}</h3>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-score-btn-container">
                  <span className="certificate-score">{cert.score}</span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-btn"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate; 