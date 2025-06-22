function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");

  document.getElementById("navLinks").classList.remove("active");
}

document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("active");
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const requiredFields = ["fullName", "email", "phone", "college"];

    document.querySelectorAll(".error-message").forEach((error) => {
      error.style.display = "none";
    });

    requiredFields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      const errorElement = document.getElementById(fieldId + "Error");

      if (!field.value.trim()) {
        errorElement.style.display = "block";
        isValid = false;
      }
    });

    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validate phone number
    const phone = document.getElementById("phone").value;
    const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, ""); // Remove formatting characters
    const phoneRegex = /^\d{10,15}$/; // 10-15 digits only
    if (phone && !phoneRegex.test(cleanPhone)) {
      document.getElementById("phoneError").textContent =
        "Please enter a valid phone number (10-15 digits)";
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    }

    if (isValid) {
      // Show success message
      document.getElementById("successMessage").style.display = "block";

      // Reset form
      this.reset();

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Animate hero section on load
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    hero.style.transition = "all 0.8s ease";

    setTimeout(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 100);
  }
});

// Add floating animation to prize cards
document.querySelectorAll(".prize-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// Form input focus effects
document.querySelectorAll("input, select, textarea").forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
  });

  input.addEventListener("blur", function () {
    this.parentElement.classList.remove("focused");
  });
});
