// src/components/About/About.jsx
import "./About.css";

import ProfileCard from "../Effects/ProfileCard/ProfileCard";

const About = () => {
  const text =
    "Hi,👋 my name is Nakul and I am currently studying in Mumbai University for Artificial Intelligence and Data Science course. " +
    "I’ve earned many certificates and badges which you can see in my Certifications section and I’m maintaining a First Class Honour so far. " +
    "I'll complete my degree in 2028 " +
    "from University of Mumbai🏛 . " +
    "I have passion to build Software which make sense in real world and now with using AI and Machine Learning." +
    "Thanks for taking your time to visit my page. 😁";

  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-profile">
          <ProfileCard
            showUserInfo={true}
            showBehindGradient={true}
            enableTilt={true}
            name="Nakul Bhatt"
            title="Software Engineer"
            handle="nakulbhatt106"
            status="Online"
            contactText="Contact Me"
            onContactClick={() => window.open('https://www.linkedin.com/in/nakul-bhatt-157aba24a/', '_blank')}
          />
        </div>

        <div className="about-text">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
