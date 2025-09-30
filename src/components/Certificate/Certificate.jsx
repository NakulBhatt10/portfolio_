import React from 'react';
import './Certificate.css';
import b1 from '../../assets/images/dataanalysis.png';
import b2 from '../../assets/images/oracle1.png';
import b3 from '../../assets/images/dataanalysis.png';
import b4 from '../../assets/images/dataanalysis.png';
import b5 from '../../assets/images/dataanalysis.png';
import b6 from '../../assets/images/b5.png';
import b7 from '../../assets/images/dataanalysis.png';
import b8 from '../../assets/images/michigan.png';
import b9 from '../../assets/images/dataanalysis.png';



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
      image: b3,
      score: "95%",
      description: "Data science by IBM",
      link: "https://www.credly.com/badges/94b202b1-70bd-422b-bf70-686b845050e3/public_url"
    },
    {
      id: 4,
      name: "Oracle AI Vector Search",
      image: b4,
      score: "91%",
      description: "Machine Learning by IBM",
      link: "https://www.credly.com/badges/22172d49-616c-4a81-b10a-6ae77bb9c2c2/public_url"
    },
    {
      id: 5,
      name: "OCI Data Science",
      image: b5,
      score: "95%",
      description: "Specialization by Coursera",
      link: "https://coursera.org/share/2da5a65dfb1d33363d2f6f89c45ddf32"
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