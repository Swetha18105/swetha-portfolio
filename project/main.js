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
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">JAVASCRIPT</span>
          <span class="skill-tag">PYTHON</span>
          <span class="skill-tag">C</span>
          <span class="skill-tag">C++</span>
          <span class="skill-tag">GIT</span>
          <span class="skill-tag">JAVA</span>
          <span class="skill-tag">MYSQL</span>
          <span class="skill-tag">FAISS embeddings</span>
          <span class="skill-tag">LangChain</span>
          <span class="skill-tag">APIs</span>
          <span class="skill-tag">FIGMA</span>
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

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('Thank you for your message! I will get back to you soon.')
  document.getElementById('contactForm').reset()
})

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
