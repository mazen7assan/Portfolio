# Premium Full Stack Developer Portfolio — Mazen Hassan Rashed

A modern, dark, futuristic, and minimal personal developer portfolio website designed and developed for **Mazen Hassan Rashed**.

Built strictly using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero frontend frameworks or heavy dependencies) adhering to clean code standards, responsive design principles, and smooth interactive motion design.

---

## 🎨 Visual Identity & Color System

The design system is centered around high-contrast dark aesthetics, subtle glassmorphism, glowing accents, and fluid motion:

| Role | Color | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Main Background** | Black | `#000000` | Deep dark space, high contrast canvas |
| **Primary Text & Highlights** | Light Mint | `#CFEAE0` | Headings, active states, glowing badges, primary buttons |
| **Accent & Ambient Glow** | Blue | `#5B91A3` | Subtitles, border accents, particle links, icons |
| **Surface Glass** | Charcoal Glass | `rgba(8, 16, 22, 0.75)` | Glassmorphism cards with `backdrop-filter: blur(16px)` |

---

## 🚀 Key Features & Interactive Architecture

1. **Zero Framework Dependencies:** Hand-crafted with modern semantic HTML5, clean modular CSS3 with CSS Custom Properties, and object-oriented vanilla ES6+ JavaScript.
2. **Centralized Configuration (`js/config.js`):** All personal data, projects, educational milestones, and links are kept in a single documented file for effortless updates without touching core code.
3. **Interactive Physics & Motion:**
   - **Interactive Particle Background:** High-performance HTML5 Canvas particle network that drifts and responds to mouse proximity.
   - **Custom Mouse Cursor & Follower:** Lagged trailing physics with hover state expansion on desktop devices.
   - **3D Card Tilt:** Real-time 3D rotation (`rotateX`, `rotateY`) reacting to cursor movement over project, statistics, and service cards.
   - **Magnetic CTA Buttons:** Subtle gravitational pull toward the cursor.
   - **Scroll-Triggered Reveals:** Smooth fade-and-slide transitions powered by the `IntersectionObserver` API.
   - **Animated Statistics Counters:** Dynamic count-up calculations when stats scroll into view.
   - **Dynamic Typing Effect:** Smooth cycling through specialized professional developer titles.
4. **Interactive Testimonials Carousel:** Complete with next/prev navigation buttons, pagination dots, autoplay with pause-on-hover, and mobile touch swipe gesture support.
5. **Categorized Skills Matrix:** 5 distinct categories covering Concepts, Development Stack, Databases, Architecture, and Tooling with proficiency badges.
6. **Accessible Contact Experience:** Direct WhatsApp messaging (pre-populated message), Gmail mailto integration, and an interactive contact form with frontend validation and feedback toasts.
7. **Accessibility & Performance:** Native support for `prefers-reduced-motion`, responsive layouts tested across all screen resolutions, and lightweight asset footprints.

---

## 📁 Project Architecture

```text
portfolio/
│
├── index.html                  # Semantic single-page HTML5 architecture
│
├── css/
│   └── style.css               # Complete responsive design, animations & theme
│
├── js/
│   ├── config.js               # Central configuration with all personal details
│   └── script.js               # Vanilla JavaScript application engine
│
├── assets/
│   ├── images/                 # SVGs and profile/project image assets
│   │   ├── placeholder-profile.svg
│   │   ├── project-ecommerce.svg
│   │   ├── project-api.svg
│   │   ├── project-fullstack.svg
│   │   ├── project-academic.svg
│   │   ├── avatar-1.svg
│   │   ├── avatar-2.svg
│   │   ├── avatar-3.svg
│   │   └── favicon.svg
│   └── icons/
│
└── README.md                   # Personalization & deployment documentation
```

---

## 💻 How to Run the Website Locally

You do not need to install Node.js, npm, or any build tools to view or develop this website:

### Option 1: Direct File Launch
Simply double-click `index.html` in your file explorer. It will open immediately in your web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Development Server (Recommended)
If using VS Code, install the **Live Server** extension:
1. Open the `portfolio` folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The site will run on `http://127.0.0.1:5500`.

Alternatively, with Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

---

# 🛠️ Personal Information & Customization Guide

Use this checklist to customize every section of your portfolio. All personal data is located in `js/config.js` unless otherwise noted.

### Customization Checklist

- [x] **Profile photo** (Configured: `assets/images/profile photo.jpeg`)
- [x] **LinkedIn URL** (Configured: `https://www.linkedin.com/in/mazen-hassan-rashed/`)
- [x] **GitHub URL** (Configured: `https://github.com/mazen7assan`)
- [x] **WhatsApp number** (Configured: `201552419683`)
- [x] **Gmail address** (Configured: `mazenhassanrashed@gmail.com`)
- [x] **Professional biography** (Configured in `js/config.js`)
- [x] **Years of experience** (Configured: `1+` years)
- [x] **Number of completed projects** (Configured: `2+` projects)
- [x] **University GPA / Grade** (Configured: `Very Good`)
- [x] **Education dates** (Configured: `2024 – 2028`)
- [x] **Experience and training details** (Configured: Junior Full Stack Developer & NTI Digital Egypt Youth Trainee)
- [x] **Project names and descriptions** (Configured: Shop Management System)
- [x] **Project screenshots** (Configured: `assets/images/project-shop.png`)
- [x] **GitHub repository links** (Configured: `https://github.com/mazen7assan/e-commerce-app`)
- [ ] **Live demo links** (Currently `null`; add your deployed URL when live)
- [x] **Real customer/mentor testimonials** (Configured: Eng. Ahmed Tarek)
- [x] **Services and contact information** (Configured)

---

### Step-by-Step Customization Reference

#### 1. Profile Photo
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.personal.profilePhoto`
* **Current Value:** `"assets/images/profile photo.jpeg"`
* **Instructions:**
  To update your photo at any time, place a photo in `assets/images/` and update `profilePhoto` in `js/config.js`.

---

#### 2. LinkedIn URL
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.contact.linkedinUrl`
* **Current Value:** `"https://www.linkedin.com/in/mazen-hassan-rashed/"`

---

#### 3. GitHub URL
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.contact.githubUrl`
* **Current Value:** `"https://github.com/mazen7assan"`

---

#### 4. WhatsApp Number & Introductory Message
* **File to modify:** `js/config.js`
* **Target Fields:**
  - `PORTFOLIO_CONFIG.contact.whatsappNumber` (`"201552419683"`)
  - `PORTFOLIO_CONFIG.contact.whatsappDefaultMessage`
* **Instructions:**
  Enter your phone number with your country code, without `+`, spaces, or dashes.

---

#### 5. Gmail Address & Email Subject
* **File to modify:** `js/config.js`
* **Target Fields:**
  - `PORTFOLIO_CONFIG.contact.email` (`"mazenhassanrashed@gmail.com"`)
  - `PORTFOLIO_CONFIG.contact.emailSubject`

---

#### 6. Professional Biography & Hero Titles
* **File to modify:** `js/config.js`
* **Target Fields:**
  - `PORTFOLIO_CONFIG.personal.typingTitles` (Array of animated titles)
  - `PORTFOLIO_CONFIG.personal.heroBio` (Hero paragraph)
  - `PORTFOLIO_CONFIG.personal.aboutBioParagraph1` (About Section intro)
  - `PORTFOLIO_CONFIG.personal.aboutBioParagraph2` (About Section tech focus)
  - `PORTFOLIO_CONFIG.personal.keyInterests` (List of 5 bulleted focus areas)

---

#### 7. Statistics (Experience, Projects, Technologies)
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.stats`
* **Current Values:**
  - Experience: `1`
  - Projects: `2`
  - Technologies: `18`

---

#### 8. University Grade & Education Dates
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.education[0]`
* **Current Values:**
  - Grade: `"Very Good"`
  - Start Date: `"2024"`
  - Expected Graduation: `"2028"`

---

#### 9. Experience & Technical Training
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.experience`
* **Current Entries:**
  1. Junior Full Stack Developer / Freelance (Independent Client Solutions / Remote / onsite, 2023 – Present)
  2. Full stack trainee (NTI Digital Egypt Youth Initiative., Summer 2026)

---

#### 10. Projects (Names, Descriptions, Screenshots, Links)
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.projects`
* **Current Project:**
  - **Title:** Shop Management System
  - **Category:** Full Stack
  - **Image:** `assets/images/project-shop.png`
  - **GitHub:** `https://github.com/mazen7assan/e-commerce-app`
  - **Live Demo:** `null` (Add live URL when deployed)

---

#### 11. Testimonials & Recommendations
* **File to modify:** `js/config.js`
* **Target Field:** `PORTFOLIO_CONFIG.testimonials`
* **Current Entry:** Eng. Ahmed Tarek (Senior Backend Engineer & Technical Mentor)
    rating: 5,
    feedback: "Mazen displays a solid understanding of backend architecture..."
  }
  ```

---

#### 12. Contact Form Backend Integration (Optional Next Step)
The contact form in `index.html` and `js/script.js` has complete client-side validation and feedback notifications. To connect it to a free email sending service without needing your own server:
1. Sign up at [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).
2. In `index.html`, add your endpoint to the `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`.
3. Or in `js/script.js` inside `initContactForm()`, replace the simulated `setTimeout` with your `fetch()` call.

---

## 📱 Responsive Testing Viewports

The portfolio has been structured and styled for precision across modern device displays:

- **Desktop Ultrawide / 4K:** `1920px+`
- **Laptop / Standard Desktop:** `1440px` & `1024px`
- **Tablet (Vertical & Horizontal):** `768px`
- **Mobile Large:** `425px`
- **Mobile Standard:** `375px` & `320px`

---

## 📜 License & Copyright

Designed and developed for **Mazen Hassan Rashed**.  
All rights reserved © 2026.
