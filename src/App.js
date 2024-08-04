import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import NavBar from './components/NavBar';
import './App.css';
import './fonts.css';



function App() {
  const [fadeIn, setFadeIn] = useState(false);

  const workExperiences = [
    {
      title: "Software Engineer Intern",
      company: "Fannie Mae",
      logo: "fannie.png",
      dates: "01/2020 - Present",
      description: "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and improved system performance by 40%."
    },
    {
      title: "Founder & Software Developer",
      company: "Sabr Solutions",
      logo: "sabrlogo.png",
      dates: "03/2018 - 12/2019",
      description: "Developed and maintained e-commerce platforms using MERN stack. Collaborated with UX team to enhance user experience and increase conversion rates by 25%."
    },
    {
      title: "Information Technology Intern",
      company: "Advocate Sherman Health",
      logo: "sherman.png",
      dates: "06/2016 - 02/2018",
      description: "Created responsive and interactive web interfaces using HTML5, CSS3, and JavaScript. Implemented A/B testing to optimize user engagement."
    },
    {
      title: "Game Developer & Instructor",
      company: "Code For Fun",
      logo: "codeforfun.png",
      dates: "09/2015 - 05/2016",
      description: "Assisted in building and maintaining client websites. Gained proficiency in WordPress development and basic SEO practices."
    }
  ];

  const projects = [
    {
      name: "LunchMoney MLH Hackathon Winner",
      tagline: "Built with Python, Flask, BeautifulSoup, Selenium, RegEx, HTML/CSS",
      image: "lmgif.gif",
      link: "https://project1link.com"
    },
    {
      name: "Depression Detector",
      tagline: "Built with Python, Flask, HTML/CSS, React",
      image: "ddgif.gif",
      link: "https://project2link.com"
    },
  ];

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const typewriterDuration = 1 * 1000;
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, typewriterDuration);

    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = useCallback((e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#about';
    }
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const popupTimeoutRef = useRef(null);

  const handleEmailClick = useCallback(() => {
    const email = "shierce.khan@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
      popupTimeoutRef.current = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <section className="header">
        <NavBar />
        <div className="header-content">
          <div className="centered-content">
            <div className="typing-container">
              <h1 className="gradient-text">
                <Typewriter
                  words={["Hey, I'm Usman.", "A full-stack software engineer from Chicago."]}
                  loop={1}
                  cursor
                  cursorStyle={<span className="cursor">_</span>}
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </h1>
            </div>
            <p className={`p2 ${fadeIn ? 'fade-in' : ''}`}>
              Welcome to my website that I made out of narcissism and boredom. You can find my projects and other work throughout the page.
            </p>
            <div className="btn-container">
              <a href="#about" className="btn" onClick={handleExploreClick}>Explore</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section">
        <h2 className="gradient-text">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="animated-text">
              Hello there! I'm Usman, a <span className="highlight">passionate software engineer</span> with a knack for creating elegant and efficient solutions. I thrive on tackling complex challenges and transforming ideas into reality through my coding skills.
            </p>
            <p className="animated-text">
              With a strong foundation in <span className="highlight">computer science</span> and a constant desire to learn, I've honed my expertise in various programming languages and frameworks. From crafting seamless user interfaces to designing robust backend systems, I take pride in delivering <span className="highlight">high-quality code</span> that not only functions flawlessly but also provides an exceptional user experience.
            </p>
            <div className="code-snippet">
              <pre>
                <code>
      {`function aboutUsman() {
        return {
          name: 'Usman',
          role: 'Full-Stack Developer',
          passions: ['Coding', 'Problem Solving', 'Learning'],
          skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
          currentStatus: 'Building amazing web experiences'
        };
      }`}
                </code>
              </pre>
            </div>
          </div>
          <div className="about-image-container">
            <div className="about-image">
              <img src="myphoto.jpg" alt="Usman" />
            </div>
          </div>
        </div>
        <div className="skills-container">
          <h3 className="gradient-text">Tech Stack</h3>
          <div className="skills-grid">
            <div className="skill-tag">JavaScript<div className="skill-bar" style={{width: '90%'}}></div></div>
            <div className="skill-tag">React<div className="skill-bar" style={{width: '85%'}}></div></div>
            <div className="skill-tag">Node.js<div className="skill-bar" style={{width: '80%'}}></div></div>
            <div className="skill-tag">Python<div className="skill-bar" style={{width: '75%'}}></div></div>
            <div className="skill-tag">SQL<div className="skill-bar" style={{width: '70%'}}></div></div>
            <div className="skill-tag">Git<div className="skill-bar" style={{width: '85%'}}></div></div>
          </div>
        </div>
      </section>
      <section id="work" className="section">
        <h2 className="gradient-text">My Experience</h2>
        <div className="work-grid">
          {workExperiences.map((experience, index) => (
            <div key={index} className="work-item">
              <div className="work-item-header">
                <img src={experience.logo} alt={`${experience.company} Logo`} className="company-logo" />
                <div className="work-item-details">
                  <h3>{experience.title}</h3>
                  <p className="company-name">{experience.company}</p>
                  <p className="work-dates">{experience.dates}</p>
                </div>
              </div>
              <p className="work-description">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="education" className="section">
        <h2 className="gradient-text">Education</h2>
        <div className="education-grid">
          <div className="education-item">
            <div className="education-item-header">
              <img src="wiscologo.png" alt="University of Wisconsin-Madison Logo" className="school-logo" />
              <div className="education-item-details">
                <h3>University of Wisconsin-Madison</h3>
                <p className="school-name">Computer Science, B.S.</p>
                <p className="education-dates">2021 - 2025</p>
              </div>
            </div>
            <ul className="education-highlights">
              <li>Relevant Coursework:</li>
              <ul>
                <li>Programming I, II, III</li>
                <li>Algorithms</li>
                <li>Artificial Intelligence</li>
                <li>Operating Systems</li>
                <li>Big Data Systems</li>
                <li>Discrete Mathematics</li>
              </ul>
              <li>Technical Lead @ Google Developer Student Clubs</li>
              <li>Member @ Software Engineering Club</li>
              <li>RecWell IMLeague Basketball</li>
            </ul>
          </div>
          <div className="education-item">
            <div className="education-item-header">
              <img src="centralhs.png" alt="Central High School Logo" className="school-logo" />
              <div className="education-item-details">
                <h3>Burlington Central High School</h3>
                <p className="school-name">High School Diploma</p>
                <p className="education-dates">2017 - 2021</p>
              </div>
            </div>
            <ul className="education-highlights">
              <li>Relevant Coursework:</li>
              <ul>
                <li>AP Computer Science A</li>
                <li>AP Calculus</li>
                <li>AP Physics</li>
                <li>AP Statistics</li>
              </ul>
              <li>Founded Programming &amp; Engineering Club</li>
              <li>Executive Board @ Peer Leaders</li>
              <li>Member @ Tech Club</li>
              <li>1x Varsity Basketball Shooting Guard</li>
              <li>2x JV Basketball Shooting Guard</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="section">
        <h2 className="gradient-text">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <div className="project-text">
                  <h3>
                    {project.name === "LunchMoney MLH Hackathon Winner" ? (
                      <>
                        LunchMoney{' '}
                        <span className="gold-gradient">MLH Hackathon Winner</span>
                      </>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p>{project.tagline}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-btn">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="gradient-text">Let's Connect!</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>I'm always excited to collaborate on new projects or just chat about tech. Don't hesitate to reach out!</p>
          </div>
          <div className="contact-links">
            <div className="contact-item" onClick={handleEmailClick}>
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </div>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built by Usman Khan</p>
      </footer>

      {showPopup && (
        <div className="popup">
          Email copied to clipboard
        </div>
      )}
    </div>
  );
}

export default App;