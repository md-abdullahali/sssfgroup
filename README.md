# SSSf Group — Premier Construction & Building Materials

A professional, multi-page website for **SSSf Group**, a leading construction company and building materials supplier.

---

## 📋 Project Overview

SSSf Group is a comprehensive business website showcasing construction services, building materials, projects, and company leadership. The site is built with modern HTML, CSS, and JavaScript to provide an engaging user experience with smooth animations and responsive design.

**Company Focus:**
- Construction & Infrastructure Projects
- Building Materials Supply (Cement, Steel, Bricks, etc.)
- Commercial & Residential Construction
- Project Portfolio & Case Studies
- Premium Customer Service

---

## 📂 Project Structure

```
SSSf_group/
├── index.html                 # Home page
├── about.html                 # About company page
├── services.html              # Services offered
├── projects.html              # Project portfolio
├── materials.html             # Building materials catalog
├── leadership.html            # Leadership team profiles
├── reviews.html               # Customer testimonials
├── contact.html               # Contact & inquiry form
├── style.css                  # Main stylesheet
├── script.js                  # JavaScript interactions
├── replace_leadership_block.py # Python utility for updating leadership section
├── images/                    # Image assets directory
│   ├── hero-bg.png           # Hero section background
│   ├── materials.png         # Materials section image
│   ├── project.png           # Projects showcase image
│   ├── about.png             # About page image
│   ├── ceo.jpg               # CEO photo
│   ├── ceo1.jpg              # Executive photo
│   ├── ceo2.jpg              # Executive photo
│   ├── manager.jpg           # Manager photo
│   └── manager2.jpg          # Manager photo
└── README.md                  # This file
```

---

## 🌐 Pages & Features

### **1. Home (index.html)**
- Hero section with company introduction
- Service highlights
- Featured projects showcase
- Leadership team preview
- Customer testimonials/reviews
- Preloader animation
- Call-to-action buttons

### **2. About (about.html)**
- Company history & mission
- Core values
- Company statistics
- Team introduction

### **3. Services (services.html)**
- Detailed service offerings
- Construction services
- Materials supply services
- Project consultation

### **4. Projects (projects.html)**
- Portfolio of completed projects
- Project case studies
- Before/after comparisons
- Client testimonials for specific projects

### **5. Materials (materials.html)**
- Building materials catalog
- Product specifications
- Quality certifications
- Pricing information

### **6. Leadership (leadership.html)**
- Executive team profiles
- Leadership bios
- Contact information
- Company organizational structure

### **7. Reviews (reviews.html)**
- Customer testimonials
- Ratings & feedback
- Case study reviews
- Client success stories

### **8. Contact (contact.html)**
- Contact form
- Office location & hours
- Phone & email contact info
- Map integration
- Quick quote request

---

## 🎨 Design & Styling

### **CSS Features (style.css)**
- Modern, professional design
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Custom navigation bar with scroll effects
- Hero section with parallax effects
- Team grid layouts
- Testimonial carousel
- Custom form styling

### **Typography**
- **Primary Font:** Outfit (300-900 weights)
- **Display Font:** DM Serif Display
- Sourced from Google Fonts

### **Components**
- Animated preloader
- Fixed navigation bar with smooth scrolling
- Service cards with hover effects
- Project showcase with lightbox
- Leadership team tiles
- Testimonial carousel
- Contact form with validation

---

## ⚙️ JavaScript Functionality (script.js)

### **Key Features**
- **Preloader Animation** – Custom loading screen displayed on page load
- **Navbar Scroll Effects** – Dynamic navbar styling based on scroll position
- **Smooth Scrolling** – Navigation links scroll smoothly to sections
- **Hero Animation** – Animated hero elements with fade and slide effects
- **Data Animation Framework** – Reusable animation system using data attributes
- **Multi-Page Support** – Consistent interactions across all pages
- **Mobile Navigation** – Responsive menu toggle for smaller screens

### **Animation System**
- `data-animate` attribute for animation types (fade-up, fade-in, slide-left, etc.)
- `data-delay` attribute for staggered animations
- Intersection Observer for scroll-triggered animations

---

## 🐍 Python Utility (replace_leadership_block.py)

### **Purpose**
Automated script to update the leadership team section in `index.html` without manual HTML editing.

### **Functionality**
- Reads the current `index.html` file
- Locates the leadership team grid section
- Replaces old team member cards with updated ones
- Preserves rest of the HTML structure
- Updates images and team member information

### **Team Members Updated**
1. **Mr. Sahil Raza** – Founder & CEO
2. **Mr. Shahzad Raza** – Operations Manager
3. **Ms. Zaineb Khan** – Head of Projects
4. **Mr. Bilal Shah** – Business Head

### **Usage**
```bash
python replace_leadership_block.py
```

---

## 🚀 How to Use

### **1. Opening the Website**
- Open `index.html` in a web browser to view the site
- All pages are linked through the navigation menu
- Responsive design adapts to all screen sizes

### **2. Editing Content**
- Modify HTML pages directly in a text editor or IDE
- Update text, links, and content as needed
- CSS can be customized in `style.css`
- JavaScript enhancements in `script.js`

### **3. Updating Images**
- Replace image files in the `images/` folder
- Keep the same filename to avoid breaking links
- Recommended image formats: PNG, JPG, WebP

### **4. Managing Leadership Team**
- Use the Python script to programmatically update team information
- Or manually edit `leadership.html` and the home page hero section

---

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop** – Full layout (1024px+)
- **Tablet** – Optimized layout (768px - 1023px)
- **Mobile** – Compact layout (< 768px)

Navigation menu converts to hamburger menu on mobile devices.

---

## 🎯 Meta Information

- **Company Name:** SSSf Group
- **Website Title:** SSSf Group — Premier Construction & Building Materials
- **Meta Description:** Leading construction company and building materials supplier
- **Keywords:** Construction, building materials, cement, steel, bricks, infrastructure
- **Language:** English (en)

---

## 📝 Navigation Structure

All pages are interconnected through the main navigation bar:

```
Home → About → Services → Projects → Materials → Leadership → Reviews → Contact
```

Plus a "Get a Quote" CTA button linking to the contact page.

---

## 🔧 Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – Styling, animations, responsive design
- **JavaScript (Vanilla)** – Interactions, animations, form handling
- **Google Fonts** – Typography
- **Python 3** – Content management utility

---

## 📦 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📧 Contact & Support

For inquiries or modifications to the website, refer to the contact information in `contact.html` or the leadership team profiles in `leadership.html`.

---

## 📄 License & Credits

**Website Created For:** SSSf Group – Construction & Building Materials

Last Updated: 2026

---

## 🛠️ Future Enhancements (Optional)

- [ ] Backend form submission handling
- [ ] Image optimization & lazy loading
- [ ] Blog/News section
- [ ] Testimonial submission system
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Built with ❤️ for SSSf Group**
