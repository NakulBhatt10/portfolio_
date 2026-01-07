import "./Skills.css";

// Frontend
import htmlLogo from "../../assets/logo/html.png";
import cssLogo from "../../assets/logo/css.png";
import jsLogo from "../../assets/logo/javsScript.png";
import reactLogo from "../../assets/logo/react.jpg";
import nextLogo from "../../assets/logo/next.jpg";
// Backend & APIs
import nodeLogo from "../../assets/logo/nodeJS.png";
import expressLogo from "../../assets/logo/express.png";
import restLogo from "../../assets/logo/rest.png";
import graphqlLogo from "../../assets/logo/graphql.png";
import jwtLogo from "../../assets/logo/jwt.png";
import firebaseLogo from "../../assets/logo/firebase.png";
import stripeLogo from "../../assets/logo/stripe.png";
import openaiLogo from "../../assets/logo/openai.png";

// Databases & Test
import mongodbLogo from "../../assets/logo/mongo.png"; // Using PostgreSQL icon as placeholder
import mysqlLogo from "../../assets/logo/sql.svg";
import awsLogo from "../../assets/logo/aws.png";
import googleCloudLogo from "../../assets/logo/google-cloud.png";

// Version Control & Other Tech
import gitLogo from "../../assets/logo/git.jpg";
import githubLogo from "../../assets/logo/github.jpg";
import npmLogo from "../../assets/logo/npm.png";
import linuxLogo from "../../assets/logo/linux.png";
import windowsLogo from "../../assets/logo/windows.png";
import macLogo from "../../assets/logo/mac.png";


export default function Skills() {
  const LOGO = {
    "Frontend": [
      { name: "HTML", icon: htmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: cssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: jsLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React", icon: reactLogo, link: "https://reactjs.org/" },
      { name: "Next.js", icon: nextLogo, link: "https://nextjs.org/" },

  ],
    "Backend & APIs": [
      { name: "Node.js", icon: nodeLogo, link: "https://nodejs.org/" },
      { name: "Express.js", icon: expressLogo, link: "https://expressjs.com/" },
      { name: "REST API", icon: restLogo, link: "https://restfulapi.net/" },


      { name: "Firebase", icon: firebaseLogo, link: "https://firebase.google.com/" },


    ],
    "Databases & Test": [
      { name: "MongoDB", icon: mongodbLogo, link: "https://www.mongodb.com/" },
      { name: "SQL", icon: mysqlLogo, link: "https://www.mysql.com/" },
    ],
    "DevOps, Cloud & CI/CD": [

      { name: "AWS", icon: awsLogo, link: "https://aws.amazon.com/" },
      { name: "Google Cloud", icon: googleCloudLogo, link: "https://cloud.google.com/" },
    ],
    "Version Control & Other Tech": [
      { name: "Git", icon: gitLogo, link: "https://git-scm.com/" },
      { name: "GitHub", icon: githubLogo, link: "https://github.com/" },
      { name: "NPM", icon: npmLogo, link: "https://www.npmjs.com/" },

    ],
    "Operating Systems": [
      { name: "Linux", icon: linuxLogo, link: "https://www.linux.org/" },
      { name: "Windows", icon: windowsLogo, link: "https://www.microsoft.com/windows/" },
      { name: "Mac", icon: macLogo, link: "https://www.apple.com/macos/" },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>

        <div className="skills-groups">
          {Object.entries(LOGO).map(([category, items]) => (
            <div key={category} className="skills-group">
              <div className="skills-category">
                <p>{category}</p>
              </div>
              <div className="skills-items">
                {items.map(({ name, icon, link }) => (
                  <a 
                    key={name} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="skill-card"
                  >
                    <img src={icon} alt={name} className="skill-icon" />
                    <span className="skill-label">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
