import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, skills, timeline, certifications } from './data.js';
import { initThreeScenes } from './three-scene.js';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI Features
  initCursor();
  initTypingAnimation();
  initMobileMenu();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertifications();
  renderGithubContributions();
  initMagneticButtons();
  initScrollAnimations();
  initContactForm();

  // Initialize Three.js Scenes
  initThreeScenes();
});

/* ==========================================================================
   1. Custom Interactive Cursor Glow
   ========================================================================== */
function initCursor() {
  const cursorGlow = document.getElementById('cursor-glow');
  const cursorDot = document.getElementById('cursor-dot');
  
  if (!cursorGlow || !cursorDot) return;

  // Check if touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    cursorGlow.style.display = 'none';
    cursorDot.style.display = 'none';
    return;
  }

  let posX = 0, posY = 0;
  let mouseX = 0, mouseY = 0;

  // Smooth lerp (linear interpolation) for the glow aura
  gsap.ticker.add(() => {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    
    gsap.set(cursorGlow, { x: posX, y: posY });
    gsap.set(cursorDot, { x: mouseX, y: mouseY });
  });

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Hover states
  const interactables = 'a, button, input, textarea, .project-card, .skill-tag, .cert-card, .magnetic';
  
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactables)) {
      cursorGlow.style.width = '120px';
      cursorGlow.style.height = '120px';
      cursorGlow.style.background = 'radial-gradient(circle, rgba(189, 0, 255, 0.15) 0%, transparent 70%)';
      cursorDot.style.transform = 'translate(-50%, -50%) scale(2.0)';
      cursorDot.style.borderColor = 'var(--color-purple)';
      cursorDot.style.backgroundColor = 'transparent';
      cursorDot.style.border = '1px solid var(--color-purple)';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactables)) {
      cursorGlow.style.width = '300px';
      cursorGlow.style.height = '300px';
      cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.07) 0%, transparent 70%)';
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorDot.style.backgroundColor = 'var(--color-cyan)';
      cursorDot.style.border = 'none';
    }
  });
}

/* ==========================================================================
   2. Typing Animation in Hero Section
   ========================================================================== */
function initTypingAnimation() {
  const typingSpan = document.getElementById('typing-text');
  if (!typingSpan) return;

  const roles = [
    "Full-Stack AI Developer",
    "3rd Year B.Sc. IT Student",
    "GLS University Scholar",
    "Creative Technical UI/UX Designer"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // faster deletion
    } else {
      typingSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // regular typing
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing loop
  setTimeout(type, 1000);
}

/* ==========================================================================
   3. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

/* ==========================================================================
   4. Render Technical Skills Catalog
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  container.innerHTML = skills.map((cat, idx) => `
    <div class="skills-category glass-panel">
      <h3><i class="${cat.icon}"></i> ${cat.category}</h3>
      <div class="skills-items">
        ${cat.items.map(item => `
          <div class="skill-tag magnetic">
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Render Featured Projects Cards & Dynamic Tilt
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  container.innerHTML = projects.map(proj => `
    <div class="project-card glass-panel" data-id="${proj.id}">
      <div class="project-image-wrapper">
        <span class="project-badge">${proj.category}</span>
        <div class="project-image-placeholder">
          <i class="${proj.icon}"></i>
        </div>
        <div class="project-links-overlay">
          <a href="${proj.githubUrl}" target="_blank" class="project-overlay-link" title="GitHub Source" aria-label="GitHub Source">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="${proj.demoUrl}" target="_blank" class="project-overlay-link" title="Live Demo" aria-label="Live Demo">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div class="project-body">
        <h3>${proj.title}</h3>
        <p class="project-desc">${proj.desc}</p>
        <div class="project-tech">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // 3D Card Hover Tilt Effect
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside the card
      const y = e.clientY - rect.top;  // y coordinate inside the card
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate rotation based on cursor relative position (-15deg to 15deg)
      const rotateX = ((y / height) - 0.5) * -15;
      const rotateY = ((x / width) - 0.5) * 15;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        ease: 'power1.out',
        duration: 0.3
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5
      });
    });
  });
}

/* ==========================================================================
   6. Render Journey Timeline (GLS -> Nirma)
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  container.innerHTML = timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-panel">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <div class="timeline-subtitle">${item.subtitle}</div>
        <p class="timeline-text">${item.text}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Render Certifications
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certs-grid-container');
  if (!container) return;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card glass-panel">
      <div class="cert-icon">
        <i class="${cert.icon}"></i>
      </div>
      <div class="cert-info">
        <h3>${cert.title}</h3>
        <p>${cert.issuer} &bull; ${cert.date}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Simulated GitHub Contributions Graph
   ========================================================================== */
function renderGithubContributions() {
  const grid = document.getElementById('github-contribution-grid');
  if (!grid) return;

  // Generate 53 columns (weeks), each containing 7 cells (days)
  const columns = 53;
  const daysPerWeek = 7;
  let cellsHTML = '';
  
  // Start from 365 days ago
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 365);

  for (let w = 0; w < columns; w++) {
    for (let d = 0; d < daysPerWeek; d++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + (w * 7) + d);

      // Map the active cells exactly to match the user's real GitHub screenshot
      let commits = 0;
      if (w === 1 && d === 5) commits = 4;
      else if (w === 2 && d === 5) commits = 4;
      else if (w === 7 && d === 1) commits = 4;
      else if (w === 7 && d === 3) commits = 4;
      else if (w === 10 && d === 1) commits = 3;
      else if (w === 18 && d === 1) commits = 3;
      else if (w === 20 && d === 4) commits = 3;
      else if (w === 37 && d === 1) commits = 3;
      else if (w === 45 && d === 1) commits = 4;
      else if (w === 45 && d === 3) commits = 4;
      else if (w === 46 && d === 5) commits = 4;
      else if (w === 46 && d === 6) commits = 4;
      else if (w === 47 && d === 0) commits = 4;
      else if (w === 51 && d === 1) commits = 8;
      else if (w === 51 && d === 2) commits = 12;
      else if (w === 51 && d === 3) commits = 2;
      else if (w === 51 && d === 4) commits = 15;
      else if (w === 51 && d === 5) commits = 8;
      else if (w === 51 && d === 6) commits = 10;
      else if (w === 51 && d === 0) commits = 5;
      else if (w === 52 && d === 1) commits = 6;

      let level = 0;
      if (commits === 0) level = 0;
      else if (commits <= 2) level = 1;
      else if (commits <= 4) level = 2;
      else if (commits <= 8) level = 3;
      else level = 4;

      const dateString = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const tooltipText = `${commits === 0 ? 'No' : commits} contribution${commits !== 1 ? 's' : ''} on ${dateString}`;
      cellsHTML += `<div class="github-cell level-${level}" data-tooltip="${tooltipText}"></div>`;
    }
  }

  grid.innerHTML = cellsHTML;
}

/* ==========================================================================
   9. Magnetic Button Effect (GSAP Spring)
   ========================================================================== */
function initMagneticButtons() {
  const magnetics = document.querySelectorAll('.magnetic');
  
  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const bound = btn.getBoundingClientRect();
      
      // Get mouse relative distance from element center
      const x = e.clientX - (bound.left + bound.width / 2);
      const y = e.clientY - (bound.top + bound.height / 2);
      
      // Pull element towards mouse (maximum 15px movement)
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Pull inner element text even more for visual depth
      const text = btn.querySelector('span');
      if (text) {
        gsap.to(text, {
          x: x * 0.15,
          y: y * 0.15,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });
    
    btn.addEventListener('mouseleave', () => {
      // Spring back to base center
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      });
      
      const text = btn.querySelector('span');
      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.4)'
        });
      }
    });
  });
}

/* ==========================================================================
   10. GSAP Scroll Trigger Animations & Stats Counters
   ========================================================================== */
function initScrollAnimations() {
  // Page Scroll Progress bar linkage
  gsap.to('#scroll-progress-bar', {
    width: '100%',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.1
    }
  });

  // Reveal Section Titles
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    gsap.from(sec.querySelector('.section-header'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sec,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Fade-in Reveal grid items
  gsap.from('#skills-grid-container .skills-category', {
    opacity: 0,
    y: 40,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 75%'
    }
  });

  gsap.from('#projects-grid-container .project-card', {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 70%'
    }
  });

  gsap.from('.timeline-item', {
    opacity: 0,
    x: (i) => i % 2 === 0 ? -50 : 50,
    stagger: 0.2,
    duration: 1.0,
    scrollTrigger: {
      trigger: '#experience',
      start: 'top 70%'
    }
  });

  gsap.from('#certs-grid-container .cert-card', {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    scrollTrigger: {
      trigger: '#certifications',
      start: 'top 80%'
    }
  });

  // Count up animation for stats cards on scroll
  const countUpCards = document.querySelectorAll('.count-up-card');
  countUpCards.forEach(card => {
    const numEl = card.querySelector('.stat-num');
    const targetVal = parseInt(numEl.getAttribute('data-val'), 10);
    
    gsap.from(numEl, {
      textContent: 0,
      duration: 2.0,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      }
    });
  });
}

/* ==========================================================================
   11. Contact Form Handler & Mock Success
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // UI Feedback status: sending
    statusEl.textContent = "Processing transmission...";
    statusEl.className = "form-status";
    
    const submitBtn = form.querySelector('#submit-btn');
    const btnSpan = submitBtn.querySelector('span');
    const originalText = btnSpan.innerHTML;
    
    btnSpan.innerHTML = `Sending... <i class="fa-solid fa-circle-notch fa-spin"></i>`;
    submitBtn.disabled = true;

    const formData = new FormData(form);
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status === 200) {
        statusEl.textContent = "Transmission successful! Message received.";
        statusEl.className = "form-status success";
        form.reset();
      } else {
        statusEl.textContent = json.message || "Something went wrong!";
        statusEl.className = "form-status error";
      }
    })
    .catch((error) => {
      console.error(error);
      statusEl.textContent = "Network error! Message not sent.";
      statusEl.className = "form-status error";
    })
    .then(() => {
      btnSpan.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Clear success notification after 5s
      setTimeout(() => {
        statusEl.textContent = "";
        statusEl.className = "form-status";
      }, 5000);
    });
  });
}
