/**
 * ==============================================================================
 * MAZEN HASSAN RASHED — MAIN JAVASCRIPT ENGINE
 * ==============================================================================
 * Architecture:
 * 1. Configuration Loader & DOM Populator
 * 2. Typing Animation Engine (Hero Professional Titles)
 * 3. Particle Canvas Background (Interactive Physics & Responsive)
 * 4. Custom Cursor & Follower (Desktop Trailing Physics)
 * 5. 3D Card Tilt & Magnetic Buttons
 * 6. Scroll Reveal & Intersection Observer Animations
 * 7. Animated Statistics Counters
 * 8. Navbar Sticky State, Scrollspy & Mobile Hamburger Menu
 * 9. Projects Category Filter System
 * 10. Testimonials Carousel (Prev/Next, Dots, Auto-play, Touch Gestures)
 * 11. Contact Form Validation & Toast Notification System
 * 12. Back-to-Top Navigation
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ============================================================================
  // 1. CONFIGURATION LOADER & DOM POPULATOR
  // ============================================================================
  // Safely loads and binds data from config.js into the DOM.
  function initConfigData() {
    if (typeof PORTFOLIO_CONFIG === "undefined") {
      console.warn("PORTFOLIO_CONFIG not found in window. Make sure config.js is loaded first.");
      return;
    }

    const cfg = PORTFOLIO_CONFIG;

    // --- Personal & Identity ---
    const navMonogram = document.getElementById("nav-monogram");
    if (navMonogram && cfg.personal.monogram) navMonogram.textContent = cfg.personal.monogram;

    const navFullName = document.getElementById("nav-full-name");
    if (navFullName && cfg.personal.name) navFullName.textContent = cfg.personal.name;

    const heroName = document.getElementById("hero-name");
    if (heroName && cfg.personal.name) heroName.textContent = cfg.personal.name;

    const heroBio = document.getElementById("hero-bio");
    if (heroBio && cfg.personal.heroBio) heroBio.textContent = cfg.personal.heroBio;

    const heroAvailability = document.getElementById("hero-availability");
    if (heroAvailability && cfg.personal.availabilityStatus) {
      heroAvailability.textContent = cfg.personal.availabilityStatus;
    }

    // Profile photos
    const heroProfileImg = document.getElementById("hero-profile-img");
    if (heroProfileImg && cfg.personal.profilePhoto) {
      heroProfileImg.src = cfg.personal.profilePhoto;
      heroProfileImg.onerror = () => { heroProfileImg.src = "assets/images/placeholder-profile.svg"; };
    }

    const aboutProfileImg = document.getElementById("about-profile-img");
    if (aboutProfileImg && cfg.personal.profilePhoto) {
      aboutProfileImg.src = cfg.personal.profilePhoto;
      aboutProfileImg.onerror = () => { aboutProfileImg.src = "assets/images/placeholder-profile.svg"; };
    }

    // Dynamic Statistics
    if (cfg.stats && Array.isArray(cfg.stats)) {
      cfg.stats.forEach((stat) => {
        const statEl = document.getElementById(`stat-${stat.id}`);
        if (statEl) {
          statEl.textContent = stat.targetNumber;
          const parent = statEl.closest(".stat-card");
          if (parent) parent.setAttribute("data-target", stat.targetNumber);
        }
      });
    }

    // Dynamic Education
    const eduGrade = document.getElementById("edu-grade");
    if (eduGrade && cfg.education && cfg.education[0] && cfg.education[0].grade) {
      eduGrade.textContent = "Grade: " + cfg.education[0].grade;
      eduGrade.className = "badge badge-mint";
    }
    const eduPeriod = document.getElementById("edu-period");
    if (eduPeriod && cfg.education && cfg.education[0]) {
      eduPeriod.textContent = `Start: ${cfg.education[0].startDate} — Expected Graduation: ${cfg.education[0].expectedGraduation}`;
    }

    // About bios
    const aboutP1 = document.getElementById("about-bio-p1");
    if (aboutP1 && cfg.personal.aboutBioParagraph1) aboutP1.textContent = cfg.personal.aboutBioParagraph1;

    const aboutP2 = document.getElementById("about-bio-p2");
    if (aboutP2 && cfg.personal.aboutBioParagraph2) aboutP2.textContent = cfg.personal.aboutBioParagraph2;

    // --- Social & Contact Links ---
    const heroLinkedIn = document.getElementById("hero-linkedin-link");
    const footerLinkedIn = document.getElementById("footer-linkedin-link");
    if (cfg.contact.linkedinUrl) {
      if (heroLinkedIn) heroLinkedIn.href = cfg.contact.linkedinUrl;
      if (footerLinkedIn) footerLinkedIn.href = cfg.contact.linkedinUrl;
    }

    const heroGithub = document.getElementById("hero-github-link");
    const footerGithub = document.getElementById("footer-github-link");
    if (cfg.contact.githubUrl) {
      if (heroGithub) heroGithub.href = cfg.contact.githubUrl;
      if (footerGithub) footerGithub.href = cfg.contact.githubUrl;
    }

    // Direct WhatsApp setup
    const whatsappVal = document.getElementById("contact-whatsapp-val");
    const whatsappBtn = document.getElementById("contact-whatsapp-btn");
    if (cfg.contact.whatsappNumber) {
      // Format number for display (e.g. +20 155 241 9683)
      const num = cfg.contact.whatsappNumber;
      const formattedNum = num.length >= 12
        ? `+${num.slice(0, 2)} ${num.slice(2, 5)} ${num.slice(5, 8)} ${num.slice(8)}`
        : `+${num}`;
      if (whatsappVal) whatsappVal.textContent = formattedNum;
      if (whatsappBtn) {
        const encodedMsg = encodeURIComponent(cfg.contact.whatsappDefaultMessage || "Hello Mazen!");
        whatsappBtn.href = `https://wa.me/${cfg.contact.whatsappNumber}?text=${encodedMsg}`;
      }
    }

    // Direct Email setup
    const emailVal = document.getElementById("contact-email-val");
    const emailBtn = document.getElementById("contact-email-btn");
    if (cfg.contact.email) {
      if (emailVal) emailVal.textContent = cfg.contact.email;
      if (emailBtn) {
        const encodedSubject = encodeURIComponent(cfg.contact.emailSubject || "Hello Mazen");
        emailBtn.href = `mailto:${cfg.contact.email}?subject=${encodedSubject}`;
      }
    }

    // Location
    const locVal = document.getElementById("contact-location-val");
    if (locVal && cfg.personal.location) {
      locVal.textContent = cfg.personal.location;
    }

    // Dynamic current year
    const yearEl = document.getElementById("current-year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Render dynamic sections
    renderExperience(cfg.experience);
    renderSkills(cfg.skillsCategories);
    renderProjects(cfg.projects);
    renderTestimonials(cfg.testimonials);
    renderServices(cfg.services);
  }

  // ============================================================================
  // 2. TYPING ANIMATION ENGINE (HERO TITLE)
  // ============================================================================
  function initTypingAnimation() {
    const typingEl = document.getElementById("typing-text");
    if (!typingEl) return;

    const titles = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal.typingTitles) || [
      "Full Stack Developer",
      "Backend Developer",
      "Node.js Developer",
      "JavaScript Developer"
    ];

    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const deleteSpeed = 45;
    const delayBetweenWords = 1800;

    function typeStep() {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        charIndex--;
        typingEl.textContent = currentTitle.substring(0, charIndex);
      } else {
        charIndex++;
        typingEl.textContent = currentTitle.substring(0, charIndex);
      }

      let timeoutDuration = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentTitle.length) {
        // Finished typing current title
        timeoutDuration = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        timeoutDuration = 400;
      }

      setTimeout(typeStep, timeoutDuration);
    }

    setTimeout(typeStep, 600);
  }

  // ============================================================================
  // 3. BACKGROUND CANVAS PARTICLE SYSTEM
  // ============================================================================
  function initCanvasParticles() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 35 : 75;
    const connectionDistance = 140;

    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.65;
        this.vy = (Math.random() - 0.5) * 0.65;
        // Alternate colors: Light Mint #CFEAE0 or Accent Blue #5B91A3
        this.color = Math.random() > 0.4 ? "rgba(207, 234, 224, " : "rgba(91, 145, 163, ";
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (gentle repulsion)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 2.5;
            this.y -= Math.sin(angle) * force * 2.5;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color + this.alpha + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.18;
            ctx.strokeStyle = `rgba(91, 145, 163, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // ============================================================================
  // 4. CUSTOM CURSOR & CURSOR FOLLOWER
  // ============================================================================
  function initCustomCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    const cursor = document.querySelector(".custom-cursor");
    const follower = document.querySelector(".cursor-follower");
    if (!cursor || !follower) return;

    let posX = -100, posY = -100;
    let followerX = -100, followerY = -100;

    window.addEventListener("mousemove", (e) => {
      posX = e.clientX;
      posY = e.clientY;
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
    });

    function loopFollower() {
      // Smooth lerp trailing physics
      followerX += (posX - followerX) * 0.18;
      followerY += (posY - followerY) * 0.18;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(loopFollower);
    }

    loopFollower();

    // Hover state over interactive elements
    const interactiveSelectors = "a, button, input, textarea, select, .tilt-card, .skill-item-row, .filter-btn, .skill-tab-btn";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.add("cursor-hover");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(interactiveSelectors)) {
        document.body.classList.remove("cursor-hover");
      }
    });
  }

  // ============================================================================
  // 5. 3D CARD TILT & MAGNETIC BUTTONS
  // ============================================================================
  function initTiltAndMagnetic() {
    if (isTouchDevice || prefersReducedMotion) return;

    // 3D Tilt effect
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // Max 6deg
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    });

    // Magnetic buttons
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    magneticBtns.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0, 0)";
      });
    });
  }

  // ============================================================================
  // 6. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ============================================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));
  }

  // ============================================================================
  // 7. ANIMATED STATISTICS COUNTER
  // ============================================================================
  function initCounters() {
    const counterElements = document.querySelectorAll(".counter");
    if (counterElements.length === 0) return;

    let hasRun = false;

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          counterElements.forEach((el) => {
            const parent = el.closest(".stat-card");
            const target = parseInt(parent ? parent.getAttribute("data-target") : el.textContent, 10) || 0;
            animateCount(el, target);
          });
        }
      });
    }, { threshold: 0.3 });

    const statsGrid = document.getElementById("stats-grid");
    if (statsGrid) statsObserver.observe(statsGrid);

    function animateCount(element, target) {
      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out quadratic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(start + (target - start) * easeProgress);

        element.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = target;
        }
      }

      requestAnimationFrame(update);
    }
  }

  // ============================================================================
  // 8. NAVBAR STICKY, SCROLLSPY & MOBILE MENU
  // ============================================================================
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    // Sticky background toggle on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Mobile Hamburger Menu Toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      // Close menu when clicking any nav link
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    // ScrollSpy active link highlighting
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  }

  // ============================================================================
  // 9. DYNAMIC SKILLS RENDERING & FILTERING
  // ============================================================================
  function renderSkills(categories) {
    const container = document.getElementById("skills-grid");
    if (!container || !categories) return;

    // SVG icon mapping for categories
    const icons = {
      code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
    };

    container.innerHTML = categories.map((cat, idx) => `
      <div class="skill-category-card tilt-card reveal reveal-delay-${(idx % 4) + 1}" data-category-id="${cat.id}">
        <div class="skill-category-header">
          <div class="category-icon-box">
            ${icons[cat.icon] || icons.code}
          </div>
          <h3 class="category-title">${cat.name}</h3>
        </div>
        <div class="skills-item-list">
          ${cat.skills.map((skill) => `
            <div class="skill-item-row">
              <div class="skill-item-name">
                <span>${skill.name}</span>
                <span class="skill-item-tag">${skill.tag || ""}</span>
              </div>
              <span class="skill-level-badge ${skill.level.toLowerCase()}">${skill.level}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");

    // Skills Filter Tabs
    const tabButtons = document.querySelectorAll(".skill-tab-btn");
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");

        const cards = container.querySelectorAll(".skill-category-card");
        cards.forEach((card) => {
          if (category === "all" || card.getAttribute("data-category-id") === category) {
            card.style.display = "flex";
            card.classList.add("revealed");
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // ============================================================================
  // 9.5 DYNAMIC EXPERIENCE RENDERING
  // ============================================================================
  function renderExperience(experiences) {
    const list = document.getElementById("experience-list");
    if (!list || !experiences) return;

    list.innerHTML = experiences.map((exp, idx) => `
      <div class="exp-card tilt-card reveal reveal-delay-${(idx % 3) + 1}">
        ${exp.isPlaceholder ? `<span class="placeholder-notice">EDITABLE PLACEHOLDER — Update in js/config.js</span>` : ""}
        <div class="exp-top-bar">
          <div>
            <h3 class="exp-role-title">${exp.role}</h3>
            <div class="exp-company">${exp.company}</div>
          </div>
          <div class="timeline-badges">
            <span class="badge ${idx === 0 ? "badge-mint" : "badge-blue"}">${exp.category}</span>
            <span class="exp-period">${exp.period}</span>
          </div>
        </div>
        <p class="exp-desc">${exp.description}</p>
        <div class="exp-tech-stack">
          ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  // ============================================================================
  // 10. DYNAMIC PROJECTS RENDERING & FILTERING
  // ============================================================================
  function renderProjects(projects) {
    const grid = document.getElementById("projects-grid");
    if (!grid || !projects) return;

    grid.innerHTML = projects.map((proj, idx) => `
      <div class="project-card tilt-card reveal reveal-delay-${(idx % 4) + 1}" data-category="${proj.category}">
        <div class="project-thumb-container">
          <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" onerror="this.src='assets/images/project-ecommerce.svg'">
          <span class="project-category-badge">${proj.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          
          <div class="project-tags">
            ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>

          <div class="project-actions">
            ${proj.githubUrl ? `
              <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" aria-label="GitHub Repository">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub Repo</span>
              </a>
            ` : ""}

            ${proj.demoUrl ? `
              <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" aria-label="Live Demo Preview">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                <span>Live Demo</span>
              </a>
            ` : ""}
          </div>
        </div>
      </div>
    `).join("");

    // Filter bar interaction with empty state handling
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filterVal = btn.getAttribute("data-filter");

        let visibleCount = 0;
        const cards = grid.querySelectorAll(".project-card");
        cards.forEach((card) => {
          if (filterVal === "all" || card.getAttribute("data-category") === filterVal) {
            card.style.display = "flex";
            card.classList.add("revealed");
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        // Toggle empty-state message if category has no projects
        let emptyNotice = grid.querySelector(".projects-empty-state");
        if (visibleCount === 0) {
          if (!emptyNotice) {
            emptyNotice = document.createElement("div");
            emptyNotice.className = "projects-empty-state";
            const githubLink = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.contact.githubUrl) || "https://github.com/mazen7assan";
            emptyNotice.innerHTML = `
              <p>Projects in <strong>${filterVal}</strong> are currently being prepared for showcase!</p>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 8px;">
                Check out active repositories and ongoing builds directly on 
                <a href="${githubLink}" target="_blank" rel="noopener noreferrer">GitHub</a>.
              </p>
            `;
            grid.appendChild(emptyNotice);
          } else {
            emptyNotice.style.display = "block";
          }
        } else if (emptyNotice) {
          emptyNotice.style.display = "none";
        }
      });
    });
  }

  // ============================================================================
  // 11. DYNAMIC TESTIMONIALS CAROUSEL
  // ============================================================================
  function renderTestimonials(testimonials) {
    const track = document.getElementById("testimonial-track");
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("carousel-prev-btn");
    const nextBtn = document.getElementById("carousel-next-btn");
    const controls = document.querySelector(".carousel-controls");

    if (!track || !testimonials || testimonials.length === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    // Render slides
    track.innerHTML = testimonials.map((t) => `
      <div class="testimonial-slide">
        <div class="testimonial-card tilt-card">
          <div class="quote-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          
          <div class="star-rating" aria-label="${t.rating} out of 5 stars">
            ${Array.from({ length: t.rating || 5 }).map(() => `
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            `).join("")}
          </div>

          <p class="testimonial-text">"${t.feedback}"</p>

          <div class="testimonial-author">
            <div class="author-avatar">
              <img src="${t.avatar}" alt="${t.clientName}">
            </div>
            <div class="author-info">
              <span class="author-name">${t.clientName}</span>
              <span class="author-role">${t.clientRole} &bull; ${t.company}</span>
            </div>
          </div>
          
          ${t.isPlaceholderNotice ? `
            <div style="margin-top: 22px;">
              <span class="placeholder-notice">${t.isPlaceholderNotice}</span>
            </div>
          ` : ""}
        </div>
      </div>
    `).join("");

    // If only 1 testimonial exists, hide navigation controls for a clean spotlight appearance
    if (controls) {
      if (testimonials.length <= 1) {
        controls.style.display = "none";
      } else {
        controls.style.display = "flex";
      }
    }

    // Render pagination dots
    if (dotsContainer && testimonials.length > 1) {
      dotsContainer.innerHTML = testimonials.map((_, i) => `
        <button class="pagination-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Go to testimonial slide ${i + 1}"></button>
      `).join("");
    }

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll(".pagination-dot");
        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentIndex);
        });
      }
    }

    function goToNext() {
      if (testimonials.length <= 1) return;
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateCarousel();
    }

    function goToPrev() {
      if (testimonials.length <= 1) return;
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener("click", () => { goToNext(); resetAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { goToPrev(); resetAutoPlay(); });

    if (dotsContainer) {
      dotsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("pagination-dot")) {
          currentIndex = parseInt(e.target.getAttribute("data-index"), 10);
          updateCarousel();
          resetAutoPlay();
        }
      });
    }

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        goToNext();
        resetAutoPlay();
      } else if (touchEndX - touchStartX > 50) {
        goToPrev();
        resetAutoPlay();
      }
    }, { passive: true });

    // Autoplay with hover pause (only if more than 1 slide)
    function startAutoPlay() {
      if (prefersReducedMotion || testimonials.length <= 1) return;
      autoPlayTimer = setInterval(goToNext, 6000);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    function resetAutoPlay() {
      stopAutoPlay();
      startAutoPlay();
    }

    const carouselWrapper = document.querySelector(".carousel-container");
    if (carouselWrapper) {
      carouselWrapper.addEventListener("mouseenter", stopAutoPlay);
      carouselWrapper.addEventListener("mouseleave", startAutoPlay);
    }

    startAutoPlay();
  }

  // ============================================================================
  // 12. DYNAMIC SERVICES RENDERING
  // ============================================================================
  function renderServices(services) {
    const grid = document.getElementById("services-grid");
    if (!grid || !services) return;

    const icons = {
      layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
    };

    grid.innerHTML = services.map((s, idx) => `
      <div class="service-card tilt-card reveal reveal-delay-${(idx % 4) + 1}">
        <div class="service-icon-box">
          ${icons[s.icon] || icons.layout}
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-summary">${s.shortSummary}</p>
        
        <div class="service-features-list">
          ${s.features.map(f => `
            <div class="service-feature-item">
              <svg class="feature-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${f}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // ============================================================================
  // 13. CONTACT FORM VALIDATION & FEEDBACK STATES
  // ============================================================================
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email-input");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = document.getElementById("contact-submit-btn");
    const btnText = document.getElementById("submit-btn-text");

    const toast = document.getElementById("toast-notification");
    const toastMsg = document.getElementById("toast-message");

    function showToast(message, isSuccess = true) {
      if (!toast || !toastMsg) return;
      toastMsg.textContent = message;
      toast.style.borderColor = isSuccess ? "var(--border-highlight)" : "#ff5f56";
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 5000);
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function checkField(input, errorId, condition) {
      const errEl = document.getElementById(errorId);
      if (!condition) {
        input.classList.add("invalid");
        if (errEl) errEl.classList.add("visible");
        return false;
      } else {
        input.classList.remove("invalid");
        if (errEl) errEl.classList.remove("visible");
        return true;
      }
    }

    // Real-time error clearance
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener("input", () => {
        input.classList.remove("invalid");
        const err = input.parentElement.querySelector(".form-error-msg");
        if (err) err.classList.remove("visible");
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const isNameValid = checkField(nameInput, "name-error", nameInput.value.trim().length >= 2);
      const isEmailValid = checkField(emailInput, "email-error", validateEmail(emailInput.value.trim()));
      const isSubjValid = checkField(subjectInput, "subject-error", subjectInput.value.trim().length >= 3);
      const isMsgValid = checkField(messageInput, "message-error", messageInput.value.trim().length >= 15);

      if (!isNameValid || !isEmailValid || !isSubjValid || !isMsgValid) {
        showToast("Please correct the errors in the form before submitting.", false);
        return;
      }

      // Preparation for backend integration (e.g. EmailJS, Formspree, or custom API)
      submitBtn.disabled = true;
      const originalText = btnText.textContent;
      btnText.textContent = "Sending Message...";

      setTimeout(() => {
        submitBtn.disabled = false;
        btnText.textContent = originalText;
        form.reset();

        showToast("Thank you, Mazen has received your message and will reply shortly!");
      }, 1200);
    });
  }

  // ============================================================================
  // 14. BACK TO TOP BUTTON
  // ============================================================================
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ============================================================================
  // INITIALIZE ALL SUBSYSTEMS
  // ============================================================================
  initConfigData();
  initTypingAnimation();
  initCanvasParticles();
  initCustomCursor();
  initTiltAndMagnetic();
  initScrollReveal();
  initCounters();
  initNavbar();
  initContactForm();
  initBackToTop();
});
