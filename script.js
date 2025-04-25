// Load config values
document.addEventListener("DOMContentLoaded", () => {
  // Apply theme colors from config
  applyThemeColors();

  // Initialize menu filtering
  initMenuFiltering();

  // Initialize back to top button
  initBackToTop();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize testimonials
  initTestimonials();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize header scroll effect
  initHeaderScroll();

  // Remove preloader
  setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  }, 1000);
});

// Apply theme colors from config
function applyThemeColors() {
  const root = document.documentElement;

  for (const [key, value] of Object.entries(config.themeColors)) {
    root.style.setProperty(`--${key}-color`, value);
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
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
}

// Header scroll effect
function initHeaderScroll() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
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
}

// Initialize Back to Top button
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active");
      } else {
        backToTopButton.classList.remove("active");
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}

// Menu filtering functionality
function initMenuFiltering() {
  const menuContainer = document.querySelector(".menu-items");
  const menuTabs = document.querySelectorAll(".menu-tab");

  if (!menuContainer || !menuTabs.length) return;

  // Render all menu items initially
  renderMenuItems(config.menuItems);

  // Add click event to menu tabs
  menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      menuTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      const category = tab.dataset.category;

      // Filter menu items based on category
      if (category === "all") {
        renderMenuItems(config.menuItems);
      } else {
        const filteredItems = config.menuItems.filter(
          (item) => item.category === category
        );
        renderMenuItems(filteredItems);
      }
    });
  });
}

// Render menu items
function renderMenuItems(items) {
  const menuContainer = document.querySelector(".menu-items");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  items.forEach((item) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.className = "menu-item fade-in";

    let dietaryTags = "";
    if (item.isVegetarian)
      dietaryTags += '<span class="menu-item-tag vegetarian">Vegetarian</span>';
    if (item.isVegan)
      dietaryTags += '<span class="menu-item-tag vegan">Vegan</span>';
    if (item.isGlutenFree)
      dietaryTags +=
        '<span class="menu-item-tag gluten-free">Gluten Free</span>';
    if (item.isSpicy)
      dietaryTags += '<span class="menu-item-tag spicy">Spicy</span>';

    menuItemElement.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.imageUrl}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${dietaryTags}
                </div>
            </div>
        `;

    menuContainer.appendChild(menuItemElement);
  });
}

// Initialize testimonials carousel
function initTestimonials() {
  const testimonialContainer = document.querySelector(".testimonials-slider");
  if (!testimonialContainer) return;

  let currentTestimonial = 0;
  const testimonials = config.testimonials;

  // Create testimonial HTML
  function renderTestimonial(index) {
    const testimonial = testimonials[index];

    // Create rating stars
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < testimonial.rating) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }

    testimonialContainer.innerHTML = `
            <div class="testimonial fade-in">
                <div class="testimonial-image">
                    <img src="${testimonial.imageUrl}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-content">
                    <p>"${testimonial.comment}"</p>
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
                <div class="testimonial-name">${testimonial.name}</div>
            </div>
        `;
  }

  // Render first testimonial
  renderTestimonial(currentTestimonial);

  // Rotate testimonials every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
  }, 5000);
}

// Initialize scroll animations
function initScrollAnimations() {
  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section");

  const fadeInOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, fadeInOptions);

  sections.forEach((section) => {
    if (section.id !== "home") {
      fadeInObserver.observe(section);
    }
  });

  // Add animation to specialty cards and menu items
  const cards = document.querySelectorAll(
    ".specialty-card, .menu-item, .gallery-item"
  );

  const cardOptions = {
    threshold: 0.1,
  };

  const cardObserver = new IntersectionObserver((entries, observer) => {
    let delay = 0;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("fade-in");
        }, delay);

        delay += 100;
        observer.unobserve(entry.target);
      }
    });
  }, cardOptions);

  cards.forEach((card) => {
    cardObserver.observe(card);
  });
}

// Contact form submission
function handleContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // For demonstration - in a real app, you would send data to a server here
    const formData = new FormData(this);
    console.log("Form submitted!");

    // Show success message
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.style.color = "var(--success-color)";
    successMessage.style.marginTop = "20px";
    successMessage.style.padding = "10px";
    successMessage.style.borderRadius = "var(--border-radius)";
    successMessage.style.backgroundColor = "rgba(42, 157, 143, 0.1)";
    successMessage.style.textAlign = "center";

    contactForm.appendChild(successMessage);

    // Reset form
    this.reset();

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  });
}
