/**
 * ==============================================================================
 * MAZEN HASSAN RASHED — PORTFOLIO CONFIGURATION
 * ==============================================================================
 * 
 * WELCOME! This file is the central hub for all your personal information, links,
 * projects, education, experience, and services.
 * 
 * HOW TO CUSTOMIZE:
 * 1. Simply replace the placeholder values (e.g., "YOUR_EMAIL", "YOUR_WHATSAPP_NUMBER")
 *    with your actual personal details.
 * 2. Every field has an explanatory comment directly above it.
 * 3. The website will automatically read this file and update all sections.
 * 
 * COLOR SYSTEM USED ACROSS THE SITE:
 * - Black: #000000 (Main background)
 * - Light Mint: #CFEAE0 (Primary text & highlights)
 * - Blue: #5B91A3 (Accent color)
 * ==============================================================================
 */

const PORTFOLIO_CONFIG = {
  // ============================================================================
  // 1. PERSONAL INFORMATION & IDENTITY
  // ============================================================================
  personal: {
    // YOUR DATA: Your full name as you want it displayed across the website.
    name: "Mazen Hassan Rashed",

    // YOUR DATA: Short monogram or initials used for the navbar logo and favicon.
    monogram: "MR",

    // YOUR DATA: Animated professional titles cycling in the Hero section.
    // You can add, edit, or remove titles from this array.
    typingTitles: [
      "Full Stack Developer",
      "Backend Developer",
      "Node.js Developer",
      "JavaScript Developer"
    ],

    // YOUR DATA: Professional bio summary displayed in the Hero section.
    heroBio: "Building scalable web applications and transforming ideas into functional, efficient, and user-friendly digital experiences.",

    // YOUR DATA: Detailed biography displayed in the "About Me" section.
    aboutBioParagraph1: "I am a dedicated Computer Science student at Mansoura University with a strong passion for Full Stack Development and Backend Engineering. I focus on building reliable, scalable, and high-performance web applications that solve real-world problems.",
    aboutBioParagraph2: "My technical journey revolves around architecting robust RESTful APIs, designing optimized database schemas, and crafting intuitive, responsive user interfaces. I enjoy diving deep into problem-solving, clean code principles, and exploring modern cloud and web technologies.",

    // YOUR DATA: Key technical interests highlighted in the About section.
    keyInterests: [
      "Building Scalable Applications",
      "Backend Development & API Architecture",
      "Database Management & Schema Optimization",
      "Algorithmic Problem-Solving",
      "Learning & Adopting Modern Technologies"
    ],

    // YOUR DATA: Path to your actual profile photo.
    profilePhoto: "assets/images/profile photo.jpeg",

    // YOUR DATA: Current academic status / availability badge.
    availabilityStatus: "Available for Projects & Internships",
    location: "Mansoura, Egypt"
  },

  // ============================================================================
  // 2. CONTACT DETAILS & SOCIAL MEDIA
  // ============================================================================
  contact: {
    // YOUR DATA: Professional Gmail address.
    email: "mazenhassanrashed@gmail.com",

    // YOUR DATA: WhatsApp phone number (Country code without '+' or spaces).
    whatsappNumber: "201552419683",

    // YOUR DATA: Predefined introductory message when someone clicks "Message Me" on WhatsApp.
    whatsappDefaultMessage: "Hello Mazen, I came across your developer portfolio and would like to connect with you!",

    // YOUR DATA: LinkedIn profile URL.
    linkedinUrl: "https://www.linkedin.com/in/mazen-hassan-rashed/",

    // YOUR DATA: GitHub profile URL.
    githubUrl: "https://github.com/mazen7assan",

    // YOUR DATA: Pre-filled subject for the email contact button.
    emailSubject: "Inquiry via Developer Portfolio - Mazen Hassan Rashed"
  },

  // ============================================================================
  // 3. ANIMATED STATISTICS (ABOUT SECTION)
  // ============================================================================
  stats: [
    {
      id: "experience",
      label: "Years of Experience",
      targetNumber: 1,
      suffix: "+",
      description: "Dedicated learning & hands-on development"
    },
    {
      id: "projects",
      label: "Projects Completed",
      targetNumber: 2,
      suffix: "+",
      description: "Full stack, backend APIs & web applications"
    },
    {
      id: "technologies",
      label: "Technologies Mastered",
      targetNumber: 18,
      suffix: "+",
      description: "Languages, frameworks, databases & DevOps tools"
    }
  ],

  // ============================================================================
  // 4. EDUCATION TIMELINE
  // ============================================================================
  education: [
    {
      institution: "Mansoura University",
      faculty: "Faculty of Computers and Information",
      department: "Computer Science Department",
      status: "Third-Year Student",
      grade: "Very Good",
      startDate: "2024",
      expectedGraduation: "2028",
      location: "Mansoura, Egypt",
      description: "Pursuing in-depth academic studies in core Computer Science fundamentals, including Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering methodologies.",
      highlights: [
        "Core focus on Algorithms, Data Structures, and Software Architecture",
        "Active participant in technical student activities and coding challenges",
        "Hands-on academic projects in Database Systems and Web Development"
      ]
    }
  ],

  // ============================================================================
  // 5. EXPERIENCE & TRAINING TIMELINE
  // ============================================================================
  experience: [
    {
      category: "Professional Experience",
      role: "Junior Full Stack Developer / Freelance",
      company: "Independent Client Solutions / Remote / onsite",
      employmentType: "Freelance / Project-Based",
      period: "2023 – Present",
      description: "Architected and delivered custom web applications and interactive client solutions. Integrated responsive frontends with secure Node.js/Express backends, optimized SQL and NoSQL database queries, and deployed web services.",
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "HTML5", "CSS3"],
      isPlaceholder: false
    },
    {
      category: "Training Programs",
      role: "Full stack trainee",
      company: "NTI Digital Egypt Youth Initiative.",
      employmentType: "Technical Training",
      period: "Summer 2026",
      description: "Completed intensive technical training on building enterprise-ready RESTful web services, applying MVC architecture, implementing JWT authentication, and managing relational and non-relational databases.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Postman", "Angular", "sql", "Git"],
      isPlaceholder: false
    }
  ],

  // ============================================================================
  // 6. SKILLS (CATEGORIZED INTO THE 5 REQUIRED SECTIONS)
  // ============================================================================
  skillsCategories: [
    {
      id: "programming-concepts",
      name: "Programming Concepts",
      icon: "code",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", tag: "Core Paradigm" },
        { name: "Data Structures & Algorithms", level: "Advanced", tag: "CS Foundations" },
        { name: "Problem Solving", level: "Advanced", tag: "Analytical" },
        { name: "Database Design", level: "Intermediate", tag: "Architecture" },
        { name: "RESTful API Design", level: "Advanced", tag: "Web Standards" }
      ]
    },
    {
      id: "development-stack",
      name: "Development Stack",
      icon: "layers",
      skills: [
        { name: "HTML5", level: "Advanced", tag: "Semantic Markup" },
        { name: "CSS3", level: "Advanced", tag: "Modern Styling & Grid/Flexbox" },
        { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core Language" },
        { name: "TypeScript", level: "Intermediate", tag: "Type-Safe JS" },
        { name: "Node.js", level: "Advanced", tag: "Runtime Environment" },
        { name: "Express.js", level: "Advanced", tag: "Backend Framework" },
        { name: "Angular", level: "Intermediate", tag: "Frontend Framework" }
      ]
    },
    {
      id: "database-skills",
      name: "Database Skills",
      icon: "database",
      skills: [
        { name: "MongoDB", level: "Advanced", tag: "NoSQL Document DB" },
        { name: "Mongoose", level: "Advanced", tag: "ODM for MongoDB" },
        { name: "PostgreSQL", level: "Intermediate", tag: "Relational RDBMS" },
        { name: "SQL Server", level: "Intermediate", tag: "Enterprise RDBMS" },
        { name: "SQL", level: "Advanced", tag: "Complex Queries & Joins" }
      ]
    },
    {
      id: "software-engineering",
      name: "Software Engineering & Patterns",
      icon: "cpu",
      skills: [
        { name: "MVC Architecture", level: "Advanced", tag: "Structural Pattern" },
        { name: "REST API Architecture", level: "Advanced", tag: "API Design" },
        { name: "Clean Code Principles", level: "Advanced", tag: "Code Quality" },
        { name: "Software Design Principles", level: "Advanced", tag: "SOLID & Modularity" },
        { name: "Basic Design Patterns", level: "Advanced", tag: "Creational & Structural" }
      ]
    },
    {
      id: "tools-workflow",
      name: "Tools & Workflow",
      icon: "tool",
      skills: [
        { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
        { name: "npm", level: "Advanced", tag: "Package Management" },
        { name: "Postman", level: "Advanced", tag: "API Testing & Docs" },
        { name: "VS Code", level: "Advanced", tag: "Development Environment" },
        { name: "Basic CI/CD", level: "Intermediate", tag: "Automation Pipelines" },
        { name: "AI-Assisted Development", level: "Advanced", tag: "Productivity & Tooling" }
      ]
    }
  ],

  // ============================================================================
  // 7. PROJECTS SHOWCASE
  // ============================================================================
  projects: [
    {
      id: "project-1",
      title: "Shop Management System",
      category: "Full Stack",
      description: "A bilingual (English/Arabic) e-commerce application with a customer storefront and a secured admin dashboard. Customers browse products, manage a cart and favorites, and check out with Cash on Delivery or Stripe, while admins manage categories, items, images, and the order lifecycle with automatic stock updates.",
      technologies: ["Angular", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe", "Jest"],
      image: "assets/images/project-shop.png",
      githubUrl: "https://github.com/mazen7assan/e-commerce-app",
      demoUrl: null,
      featured: true,
      highlights: ["Bilingual EN/AR Interface", "Stripe & Cash on Delivery Checkout", "JWT-Protected Admin Dashboard", "Server-Side Price & Stock Validation"]
    }
  ],

  // ============================================================================
  // 8. TESTIMONIALS & FEEDBACK
  // ============================================================================
  testimonials: [
    {
      id: "testimonial-1",
      clientName: "Eng. Ahmed Tarek",
      clientRole: "Senior Backend Engineer & Technical Mentor",
      company: "Tech Mentorship Program",
      avatar: "assets/images/avatar-1.svg",
      rating: 5,
      feedback: "Mazen displays a solid understanding of backend architecture and database modeling. His dedication to clean code standards and algorithmic efficiency makes him a strong asset on any engineering team.",
      isPlaceholderNotice: "EDITABLE PLACEHOLDER — Replace with actual feedback from your mentors, clients, or professors."
    }
  ],

  // ============================================================================
  // 9. PROFESSIONAL SERVICES
  // ============================================================================
  services: [
    {
      id: "backend",
      title: "Backend Development",
      icon: "server",
      shortSummary: "Engineering secure, high-throughput server-side applications and resilient APIs.",
      features: [
        "RESTful API design and development",
        "Server-side application logic & business workflows",
        "Secure Authentication & Authorization (JWT, OAuth)",
        "Backend third-party service integration",
        "Error handling, rate limiting & security hardening"
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: "layout",
      shortSummary: "Crafting modern, accessible, and high-performance user interfaces with clean semantic code.",
      features: [
        "Responsive website development (Mobile to 4K)",
        "Modern UI implementation & Design Systems",
        "Interactive user interfaces & Smooth Motion",
        "Cross-device and cross-browser compatibility",
        "Performance optimization & Accessibility (a11y)"
      ]
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      icon: "layers",
      shortSummary: "End-to-end web application development connecting robust backends with seamless client experiences.",
      features: [
        "Complete full-stack web applications",
        "Seamless frontend & backend integration",
        "Database connectivity & state synchronization",
        "End-to-end feature architecture & deployment",
        "Maintainable, modular, and scalable codebases"
      ]
    },
    {
      id: "database",
      title: "Database Management",
      icon: "database",
      shortSummary: "Designing optimized relational and document schemas for data integrity and speed.",
      features: [
        "Database schema design & ER diagramming",
        "Data modeling (MongoDB, PostgreSQL, SQL Server)",
        "Efficient CRUD operations & indexing strategies",
        "Data aggregation pipelines & complex SQL queries",
        "Data validation and consistency enforcement"
      ]
    }
  ]
};

// Export for ES modules or attach to window for classic script usage
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
