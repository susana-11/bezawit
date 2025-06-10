import React, { useState } from 'react';
import './App.css';
import { FaFacebookF, FaTiktok, FaTelegramPlane } from 'react-icons/fa';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-left">
            <h1>Hello, my name is</h1>
            <h2 className="highlight-name">Bezawit Andargie</h2>
            <h3>And I'm a <span className="highlight">Frontend Developer</span></h3>
          </div>
          <div className="home-right">
            <div className="glow-circle">
              <img src="profile.jpg" alt="Bezawit" className="profile-image" />

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-left">
            <h2>About Me</h2>
            <p>
              Hi, I'm Bezawit Andargie, a passionate Frontend Developer based in Debre Markos.
              I specialize in creating beautiful, responsive, and interactive websites using modern web technologies like HTML, CSS, JavaScript, and React.
              <br /><br />
              With a keen eye for design and user experience, I aim to bring creative ideas to life and build web interfaces that are not only functional but also visually appealing.
              I'm constantly learning and improving my skills to stay up-to-date with the latest trends in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">What I Know</p>

        {[
          { label: 'HTML', percent: '70%', className: 'html' },
          { label: 'CSS', percent: '65%', className: 'css' },
          { label: 'React', percent: '60%', className: 'react' },
          { label: 'GitHub', percent: '50%', className: 'github' }
        ].map((skill) => (
          <div className="skills-skill" key={skill.label}>
            <div className="skill-label">
              <span>{skill.label}</span>
              <span className="percent">{skill.percent}</span>
            </div>
            <div className="skills-bar">
              <div className={`skills-progress progress ${skill.className}`}></div>
            </div>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>My Services</h2>
        <div className="service-boxes">
          <div className="service-card">
            <h3>Web Design</h3>
            <p>Beautiful and responsive website designs.</p>
          </div>
          <div className="service-card">
            <h3>Development</h3>
            <p>Building full-stack applications using modern tools.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p><strong>Phone:</strong> <a href="tel:+25169236105">+251 69236105</a></p>
            <p><strong>Email:</strong> <a href="mailto:andargiebezawit@gmail.com">andargiebezawit@gmail.com</a></p>
            <p><strong>Address:</strong> Debre Markos, Ethiopia</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Bezawit. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><FaTelegramPlane /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
