// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll to top when page refreshes
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form submission (prevent default and show success message)
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // For demonstration - in a real app, you would send data to a server here
  const formData = new FormData(this);
  console.log("Form submitted!");

  // Show success message
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.textContent = "Your message has been sent successfully!";
  successMessage.style.color = "#4a6cf7";
  successMessage.style.marginTop = "20px";
  successMessage.style.padding = "10px";
  successMessage.style.borderRadius = "5px";
  successMessage.style.backgroundColor = "rgba(74, 108, 247, 0.1)";
  successMessage.style.textAlign = "center";

  contactForm.appendChild(successMessage);

  // Reset form
  this.reset();

  // Remove success message after 5 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
});

// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section");

  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  sections.forEach((section) => {
    if (section.id !== "home") {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      fadeInObserver.observe(section);
    }
  });

  // Add animation to skill cards and project cards
  const cards = document.querySelectorAll(".skill-card, .project-card");

  const cardOptions = {
    threshold: 0.1,
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    let delay = 0;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }, delay);

        delay += 100;
        observer.unobserve(entry.target);
      }
    });
  }, cardOptions);

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    cardObserver.observe(card);
  });
});
