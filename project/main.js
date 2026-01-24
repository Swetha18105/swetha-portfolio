import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <img src="/logo.png" alt="Swetha logo" class="logo-image">
      </div>
      <nav class="nav-links">
        <a href="#home" class="nav-link active">HOME</a>
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#skills" class="nav-link">SKILLS</a>
        <a href="#projects" class="nav-link">PROJECTS</a>
        <a href="#contact" class="nav-link">CONTACT</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">SWETHA SUNDHAR</h1>
        <p class="hero-subtitle">I build modern web interfaces where design meets performance.<br>Designing delightful user experiences.</p>
        <button class="cta-button" onclick="scrollToAbout()">View More</button>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="about-container">
        <div class="about-content">
          <h2>ABOUT ME</h2>
          <p>Hi, I'm Swetha Sundhar, a Computer Science Engineering student passionate about frontend development and UI/UX design. I enjoy building responsive, user-focused web interfaces using HTML, CSS, JavaScript, React, and Figma.</p>
          <p>With hands-on experience in real-world projects and internships, I love turning ideas into clean, intuitive digital experiences that feel purposeful and easy to use.</p>
        </div>
        <div class="about-image">
          <img src="/Swetha.jpeg">
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
      <div class="skills-container">
        <h2>MY SKILLS</h2>
        <div class="skills-grid">

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5">
      <p class="skill-card-text">HTML/CSS</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python">
      <p class="skill-card-text">PYTHON</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript">
      <p class="skill-card-text">JAVASCRIPT</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++">
      <p class="skill-card-text">C++</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java">
      <p class="skill-card-text">JAVA</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL">
      <p class="skill-card-text">MYSQL</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma">
      <p class="skill-card-text">FIGMA</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain-color.png" alt="LangChain">
      <p class="skill-card-text">LANGCHAIN</p>
    </div>
  </div>

  <div class="skill-card">
    <div class="skill-card-inner">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg" alt="APIs">
      <p class="skill-card-text">APIs</p>
    </div>
  </div>


</div>

      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="projects-container">
        <h2>PROJECTS</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-image">
              <img src="/AquaTradeX.jpeg" alt="AquaTradeX">
            </div>
            <h3>AquaTradeX</h3>
            <p>Sustainable aquaculture full-stack platform</p>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="/Resume Filter Chatbot.jpeg" alt="Resume Filter Chatbot">
            </div>
            <h3>Resume Filter Chatbot</h3>
            <p>AI-powered semantic resume screening</p>
          </div>
          <div class="project-card">
            <div class="project-image">
              <img src="/Portfolio.png" alt="Portfolio">
            </div>
            <h3>Portfolio</h3>
            <p>Modern responsive personal portfolio.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="contact-container">
        <h2>CONTACT ME</h2>
        <div class="contact-box">
          <p class="contact-intro">Have an idea? Let's make it real.</p>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" class="submit-button">Send</button>
          </form>
          <div class="social-links">
            <p class="social-text">Or connect with me on:</p>
            <div class="social-icons">
              <a href="https://github.com/Swetha18105" target="_blank" rel="noopener noreferrer" class="social-icon github" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/swetha-sundhar-1051a32b1/" target="_blank" rel="noopener noreferrer" class="social-icon linkedin" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.838 0-9.753h3.554v1.381c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.736 1.393 3.736 4.38v5.602zM5.337 9.341c-1.144 0-1.914-.758-1.914-1.71 0-.955.77-1.71 1.958-1.71 1.187 0 1.912.755 1.937 1.71 0 .952-.75 1.71-1.981 1.71zm1.581 11.111H3.615V9.599h3.303v10.853zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="mailto:swethasundhar1810@gmail.com" class="social-icon email" title="Email Me">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2026 Swetha Sundhar. All rights reserved.</p>
  </footer>
`

// Navigation smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
    const target = link.getAttribute('href')
    const section = document.querySelector(target)
    const navbar = document.querySelector('.navbar')
    const offset = navbar ? navbar.offsetHeight : 0
    const extraOffset = (target === '#about' || target === '#contact') ? 40 : 0
    const top = section.offsetTop - offset + extraOffset
    window.scrollTo({ top, behavior: 'smooth' })
    // pause scroll-driven active updates during smooth scroll
    scrollLockUntil = Date.now() + 900
  })
})

// Update active nav on scroll
let scrollLockUntil = 0
window.addEventListener('scroll', () => {
  if (Date.now() < scrollLockUntil) return
  const sections = ['home', 'about', 'skills', 'projects', 'contact']
  let current = ''

  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element.offsetTop <= window.scrollY + 100) {
      current = section
    }
  })

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active')
    }
  })
})

// View More button scroll to About
function scrollToAbout() {
  const section = document.getElementById('about')
  const navbar = document.querySelector('.navbar')
  const offset = navbar ? navbar.offsetHeight : 0
  const extraOffset = 40 // same as About nav link
  const top = section.offsetTop - offset + extraOffset
  window.scrollTo({ top, behavior: 'smooth' })
  // Update active nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
  document.querySelector('a[href="#about"]').classList.add('active')
}

// expose for inline onclick in module script
window.scrollToAbout = scrollToAbout

// Contact Form EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_wnkir47", "template_uyxkqr9", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(function() {
    alert("✅ Message Sent Successfully!");
    document.getElementById("contactForm").reset();
  })
  .catch(function(error) {
    alert("❌ Error sending message!");
    console.log(error);
  });
});



// Scroll reveal animations
const revealEls = document.querySelectorAll('section, .project-card, .skill-tag, .about-image')
revealEls.forEach(el => el.classList.add('reveal'))

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in')
        io.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
)

revealEls.forEach(el => io.observe(el))
