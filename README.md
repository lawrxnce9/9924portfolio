# Personal Portfolio Website

A clean, minimalist, and modern personal portfolio website to showcase your achievements, skills, projects, and experience.

## 🎨 Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
✨ **Modern & Minimalist** - Clean aesthetic with smooth animations  
✨ **Multiple Sections** - Hero, About, Skills, Projects, Experience, Blog, Contact  
✨ **Interactive Elements** - Smooth scrolling, hover effects, mobile menu  
✨ **Contact Form** - Ready-to-use contact form with validation  
✨ **SEO Friendly** - Proper meta tags and semantic HTML  
✨ **Fast Loading** - Optimized CSS and JavaScript

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Open in Browser

1. Open `index.html` in your web browser
2. The website will load immediately with full functionality

### Option 2: Use a Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server installed)
http-server
```

Then open `http://localhost:8000` in your browser

## ✏️ Customization Guide

### 1. Update Personal Information

Open `index.html` and replace placeholders:

- **Your Name**: Change "Portfolio" in navbar and all "Your Name" text
- **Hero Section**: Update title, subtitle, and description
- **About Section**: Replace bio text and update stats numbers
- **Email**: Change `mailto:your.email@example.com` links

### 2. Add Your Projects

In the **Projects Section**, update each project card:

```html
<div class="project-card">
  <div
    class="project-image"
    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
  ></div>
  <h3>Your Project Title</h3>
  <p class="project-description">Your project description</p>
  <div class="project-tags">
    <span class="tag">Technology 1</span>
    <span class="tag">Technology 2</span>
  </div>
  <a href="https://your-project-link.com" class="project-link"
    >View Project →</a
  >
</div>
```

**Gradient Ideas for Project Images**:

- Purple to Pink: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Pink to Red: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- Blue to Cyan: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- Green to Blue: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`
- Orange to Red: `linear-gradient(135deg, #fa709a 0%, #fee140 100%)`

### 3. Update Skills Section

Replace skill categories and items in the **Skills & Expertise** section:

```html
<div class="skill-card">
  <h3>Your Skill Category</h3>
  <ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>
</div>
```

### 4. Add Experience Timeline

Update the **Experience Section** with your work history:

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h3>Your Job Title</h3>
    <p class="company">Company Name | Year - Year</p>
    <p>Your responsibilities and achievements</p>
  </div>
</div>
```

### 5. Add Blog Posts

Update the **Blog Section** with your articles:

```html
<article class="blog-card">
  <div class="blog-date">Date</div>
  <h3>Article Title</h3>
  <p>Brief article description</p>
  <a href="https://your-blog-link.com" class="read-more">Read More →</a>
</article>
```

### 6. Update Social Links

In the **Contact Section**, update your social media links:

```html
<div class="social-links">
  <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
  <a href="https://github.com/yourprofile" target="_blank">GitHub</a>
  <a href="mailto:your.email@example.com">Email</a>
</div>
```

## 🎨 Color Customization

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #2c3e50; /* Dark blue - main text, headings */
  --secondary-color: #3498db; /* Light blue - links, accents */
  --accent-color: #e74c3c; /* Red - CTA buttons, highlights */
  --text-color: #333; /* Dark gray - body text */
  --light-text: #666; /* Gray - secondary text */
  --bg-color: #ffffff; /* White - background */
  --light-bg: #f8f9fa; /* Light gray - alternate sections */
  --border-color: #ecf0f1; /* Very light gray - borders */
}
```

**Popular Color Schemes**:

1. **Professional Blue**:
   - Primary: #2c3e50, Secondary: #3498db, Accent: #e74c3c

2. **Modern Dark**:
   - Primary: #1a1a1a, Secondary: #00d4ff, Accent: #ff006e

3. **Green & Teal**:
   - Primary: #2d5f3f, Secondary: #27a896, Accent: #f2a154

4. **Purple & Pink**:
   - Primary: #5a4a7a, Secondary: #9b6ba8, Accent: #ff006e

## 📱 Features Breakdown

### Responsive Design

- **Desktop**: Full layout with all sections visible
- **Tablet**: Optimized grid layout and spacing
- **Mobile**: Single column layout with hamburger menu

### Smooth Animations

- Page load animations (fade in)
- Hover effects on cards and buttons
- Scroll-triggered animations for sections
- Smooth scrolling navigation

### Interactive Elements

- Mobile hamburger menu
- Active navigation link highlighting
- Form validation
- Scroll progress tracking
- Hamburger menu close on link click

## 🔧 JavaScript Functions

The `script.js` file includes:

- **Mobile Menu Toggle**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll to sections
- **Active Nav Link**: Highlights current section in navigation
- **Intersection Observer**: Triggers animations when elements enter viewport
- **Form Validation**: Validates contact form before submission
- **Scroll Effects**: Updates navbar shadow and progress on scroll

## 🚢 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository named `username.github.io`
2. Push your files to the repository
3. Access your portfolio at `https://username.github.io`

### Deploy to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Connect your GitHub repository
3. Netlify will automatically deploy on every push

### Deploy to Vercel

1. Go to [vercel.com](https://www.vercel.com)
2. Import your GitHub repository
3. Vercel will automatically deploy your site

### Deploy to Any Web Host

1. Upload `index.html`, `styles.css`, and `script.js` to your hosting server
2. Access your website via your domain

## 📧 Contact Form Setup

For the contact form to actually send emails, you need a backend service:

### Option 1: EmailJS (No Backend Needed)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add this to your HTML before `</head>`:

```html
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"
></script>
```

3. Initialize EmailJS in `script.js`:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

### Option 2: Formspree

1. Go to [formspree.io](https://formspree.io)
2. Change form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

### Option 3: Basin

1. Go to [basin.io](https://www.basin.io)
2. Update form action similarly

## 🎯 Best Practices

1. **Keep Content Updated**: Regularly update projects, blog, and experience
2. **Use High-Quality Images**: If adding project images, use high-resolution files
3. **Optimize for Performance**: Compress images and minimize CSS/JS
4. **Mobile Testing**: Test on actual mobile devices
5. **SEO Optimization**: Update meta tags and descriptions
6. **Accessibility**: Ensure good contrast and semantic HTML

## 🐛 Troubleshooting

**Mobile menu not working?**

- Check browser console for JavaScript errors
- Ensure `script.js` is loaded correctly

**Styling looks off?**

- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Check that `styles.css` is in the same directory

**Contact form not submitting?**

- Implement a backend service (EmailJS, Formspree, etc.)
- Check browser console for errors

## 📄 License

Feel free to use this template for your portfolio. Customize it as you like!

## 💡 Tips

- Add a favicon (website icon) in the head tag:

  ```html
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  ```

- Add Google Analytics for tracking:

  ```html
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "YOUR_GA_ID");
  </script>
  ```

- Add Open Graph meta tags for better sharing:
  ```html
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your portfolio description" />
  <meta property="og:image" content="preview-image.jpg" />
  ```

---

**Happy customizing! 🚀 If you find this template useful, consider giving it a star on GitHub!**
