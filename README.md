# Task-Assignment
CodeCraft 2025 - Hackathon Website
A modern, responsive website for a college hackathon event built with pure HTML, CSS, and JavaScript. The website features a sleek design with glassmorphism effects, smooth animations, and complete functionality for event registration and information display.
 Project Description
CodeCraft 2025 is a comprehensive website designed for a 48-hour hackathon event. The website serves as a central hub for participants to learn about the event, register, and get all necessary information. It features a modern design approach with engaging visuals and user-friendly navigation.
Key Features:

Responsive Design: Optimized for desktop, tablet, and mobile devices
Modern UI/UX: Gradient backgrounds, glassmorphism effects, and smooth animations
Complete Event Information: Detailed schedules, rules, prizes, and venue information
Functional Registration System: Form validation and success handling
Interactive Elements: Hover effects, animated cards, and smooth transitions
Contact Information: Multiple ways to reach organizers and venue details

 Technologies Used
Frontend Technologies:

HTML5: Semantic markup and structure
CSS3: Modern styling with advanced features

CSS Grid and Flexbox for layouts
CSS Gradients and backdrop-filter for glassmorphism
CSS Transitions and Transforms for animations
Media queries for responsive design


Vanilla JavaScript: Client-side functionality

DOM manipulation
Form validation
Event handling
Page navigation system



Design Techniques:

Gradient Backgrounds: Eye-catching color transitions
Mobile-First Approach: Responsive design methodology
CSS Animation: Smooth hover effects and transitions

Set up/ installation
Using VS Code Live Server Extension

Install "Live Server" extension in VS Code
Right-click on index.html
Select "Open with Live Server"

Screenshots of website


 Key Pages Overview
1. Home/Landing Page

Hero Section: Eye-catching title with gradient background
Event Info Grid: Date, time, venue, prize pool
Call-to-Action: Prominent register button

2. Event Details Page

Complete Schedule: 3-day detailed agenda
Rules & Guidelines: Clear participation rules
Prize Breakdown: $25,000 prize distribution
Included Benefits: Meals, swag, workshops

3. Registration Form

Required Fields: Name, email, phone, college
Optional Fields: Year, experience, interests, dietary restrictions
Real-time Validation: Email format, phone number validation
Success Handling: Confirmation message display

4. Contact Page

Multiple Contact Methods: Email, phone, Discord
Venue Information: Address, parking, public transport
Social Media Links: Facebook, Twitter, Instagram, LinkedIn
Organizing Team: Key contact persons

 Design Features
Visual Elements

Gradient Background: Purple to blue gradient (#667eea to #764ba2)
Glassmorphism Effects: Translucent panels with backdrop blur
Smooth Animations: Hover effects and page transitions
Modern Typography: Clean, readable font hierarchy

Interactive Components

Responsive Navigation: Desktop menu + mobile hamburger
Animated Cards: Prize cards with hover lift effects
Form Interactions: Focus states and validation feedback
Smooth Scrolling: Page navigation transitions

 Challenges Faced and Solutions
Challenge 1: Creating a Single-Page Application with Pure HTML
Problem: Need to show different pages without multiple HTML files
Solution:
javascript// Implemented JavaScript page switching system
function showPage(pageId) {

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    

    document.getElementById(pageId).classList.add('active');
}
Challenge 2: Phone Number Validation Across Different Formats
Problem: Users input phone numbers in various formats (with/without country codes, different separators)
Solution:
javascript// Clean and validate phone numbers
const phone = document.getElementById('phone').value;
const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, ''); // Remove formatting
const phoneRegex = /^\d{10,15}$/; 
Challenge 3: Responsive Design Without CSS Framework
Problem: Creating responsive layout without Bootstrap or similar frameworks
Solution:

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

@media (max-width: 768px) {
    .info-grid {
        grid-template-columns: 1fr; /* Stack on mobile */
    }
}
Challenge 4: Modern Visual Effects with Pure CSS
Problem: Achieving glassmorphism and modern effects without external libraries
Solution:
css/* Glassmorphism effect */
.event-info {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
Challenge 5: Mobile Navigation Menu
Problem: Creating a responsive hamburger menu without JavaScript frameworks
Solution:
css/* CSS-based mobile menu with JavaScript toggle */
.nav-links {
    position: fixed;
    left: -100%; /* Hidden by default */
    transition: left 0.3s ease;
}

.nav-links.active {
    left: 0; /* Slide in when active */
}
Challenge 6: Form Validation User Experience
Problem: Providing clear, real-time feedback for form errors
Solution:
javascript// Clear validation with specific error messages
if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address';
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
}
