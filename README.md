# 🧑‍💻 Chirenjeevi DJ - Personal Portfolio Website

Welcome to my official personal portfolio website. This site showcases my skills, projects, and experience in **Cybersecurity** and **Full Stack Development**. It features a modern design, smooth animations, dark/light mode toggle, and a working contact form powered by EmailJS.

---

## 🔥 Features

- 🌐 Fully Responsive Design (Mobile-Friendly)  
- 🎨 Orange-themed Aesthetic with Dark/Light Mode Toggle  
- 💬 Contact Form with EmailJS Integration  
- 📄 Resume Download Option  
- 🚀 Smooth Scroll Reveal Animations  
- ⚡ Fast Loading and Easy to Deploy (GitHub Pages / Netlify)  
- 💼 Professional Look for Hiring / Freelance Opportunities  

---

## 📁 Folder Structure

portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── resume.pdf
│   └── profile.jpg

---

## 🛠️ Tech Stack

- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **EmailJS** – For sending contact messages via email  
- **Font Awesome** – For icons  
- **Responsive Design** – Media queries for mobile/tablet view  

---

## 📬 Contact Form Setup (EmailJS)

1. Go to [https://emailjs.com](https://emailjs.com) and create an account.  
2. Add an email service (like Gmail).  
3. Create a template with `name`, `email`, and `message`.  
4. Copy your **Service ID**, **Template ID**, and **Public Key**.  
5. Replace them in `script.js`:
```js
emailjs.sendForm('service_ID', 'template_ID', '#contact-form')
emailjs.init("your_public_key")
