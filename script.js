// Enhanced JavaScript for Modern Restaurant Website
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initPreloader();
  initSmoothScroll();
  initHeaderScroll();
  initMobileMenu();
  initMenuFiltering();
  initTestimonials();
  initGalleryLightbox();
  initContactForm();
  initBackToTop();
  initScrollAnimations();
  initParticleEffect();

  // Apply configuration-based content
  applyConfigContent();
});

// Enhanced Preloader with smooth fade out
function initPreloader() {
  const preloader = document.querySelector(".preloader");
  if (!preloader) return;

  // Simulate loading time
  setTimeout(() => {
    preloader.classList.add("fade-out");

    // Remove from DOM after animation
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1500);
}

// Enhanced Smooth Scrolling
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update active nav link
        updateActiveNavLink(targetId);
      }
    });
  });
}

// Update active navigation link
function updateActiveNavLink(targetId) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === targetId) {
      link.classList.add("active");
    }
  });
}

// Enhanced Header with scroll effects
function initHeaderScroll() {
  let lastScrollY = window.scrollY;
  const header = document.querySelector("header");
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;

    // Add scrolled class for styling
    if (currentScrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Hide/show header on scroll direction with CSS classes instead of direct style manipulation
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });
}

// Enhanced Mobile Menu with animations
function initMobileMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    const isActive = navLinks.classList.contains("active");

    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

    // Animate menu items
    if (!isActive) {
      navItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("slide-in-left");
        }, index * 100);
      });
    }

    // Toggle body scroll
    document.body.style.overflow = isActive ? "auto" : "hidden";
  });

  // Close mobile menu when clicking on a nav link
  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "auto";

      navItems.forEach((item) => {
        item.classList.remove("slide-in-left");
      });
    });
  });

  // Close menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}

// Enhanced Menu Filtering with animations
function initMenuFiltering() {
  const menuContainer = document.querySelector(".menu-items");
  const menuTabs = document.querySelectorAll(".menu-tab");

  if (!menuContainer || !menuTabs.length || !config.menuItems) return;

  // Render all menu items initially
  renderMenuItems(config.menuItems);

  // Add click event to menu tabs
  menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Prevent multiple clicks during animation
      if (menuContainer.classList.contains("filtering")) return;

      // Remove active class from all tabs
      menuTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      const category = tab.dataset.category;

      // Add filtering class to prevent multiple clicks
      menuContainer.classList.add("filtering");

      // Fade out current items using CSS class
      menuContainer.classList.add("fade-out");

      // Filter and render new items after fade out
      setTimeout(() => {
        if (category === "all") {
          renderMenuItems(config.menuItems);
        } else {
          const filteredItems = config.menuItems.filter(
            (item) => item.category === category
          );
          renderMenuItems(filteredItems);
        }

        // Remove fade out class and filtering lock
        menuContainer.classList.remove("fade-out");
        setTimeout(() => {
          menuContainer.classList.remove("filtering");
        }, 100);
      }, 300);
    });
  });
}

// Enhanced Menu Items Rendering
function renderMenuItems(items) {
  const menuContainer = document.querySelector(".menu-items");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  items.forEach((item, index) => {
    const menuItemElement = document.createElement("div");
    menuItemElement.className = "menu-item";

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
        <img src="${item.imageUrl}" alt="${
      item.name
    }" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center'">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <div class="menu-item-price">${item.price.toFixed(
                      2
                    )} ر.س</div>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-tags">
                    ${dietaryTags}
                </div>
            </div>
        `;

    menuContainer.appendChild(menuItemElement);

    // Use CSS animation instead of JavaScript style manipulation
    menuItemElement.style.animationDelay = `${index * 0.1}s`;
    menuItemElement.classList.add("menu-item-enter");
  });
}

// Enhanced Testimonials with better UX
function initTestimonials() {
  const testimonialContainer = document.querySelector(".testimonials-slider");
  if (!testimonialContainer || !config.testimonials) return;

  let currentTestimonial = 0;
  const testimonials = config.testimonials;

  // Create testimonial dots for navigation
  const dotsContainer = document.createElement("div");
  dotsContainer.className = "testimonial-dots";
  dotsContainer.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
  `;

  testimonials.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `testimonial-dot ${index === 0 ? "active" : ""}`;
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: ${index === 0 ? "var(--primary-color)" : "var(--gray-light)"};
      cursor: pointer;
      transition: all 0.3s ease;
    `;

    dot.addEventListener("click", () => {
      currentTestimonial = index;
      renderTestimonial(index);
      updateDots(index);
    });

    dotsContainer.appendChild(dot);
  });

  function renderTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialContainer.innerHTML = `
            <div class="testimonial fade-in">
                <div class="testimonial-image">
          <img src="${testimonial.imageUrl}" alt="${
      testimonial.name
    }" loading="lazy">
                </div>
                <div class="testimonial-content">
          <p>"${testimonial.text}"</p>
                </div>
                <div class="testimonial-rating">
          ${"★".repeat(testimonial.rating)}${"☆".repeat(5 - testimonial.rating)}
                </div>
                <div class="testimonial-name">${testimonial.name}</div>
        <div class="testimonial-title">${testimonial.title || "Customer"}</div>
            </div>
        `;
  }

  function updateDots(activeIndex) {
    const dots = dotsContainer.querySelectorAll(".testimonial-dot");
    dots.forEach((dot, index) => {
      dot.style.background =
        index === activeIndex ? "var(--primary-color)" : "var(--gray-light)";
      dot.classList.toggle("active", index === activeIndex);
    });
  }

  // Initialize first testimonial
  renderTestimonial(0);
  testimonialContainer.appendChild(dotsContainer);

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
    updateDots(currentTestimonial);
  }, 5000);
}

// Gallery Lightbox Effect
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return;

      // Create lightbox
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;

      const lightboxImg = document.createElement("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      `;

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "×";
      closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 40px;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 10001;
      `;

      lightbox.appendChild(lightboxImg);
      lightbox.appendChild(closeBtn);
      document.body.appendChild(lightbox);

      // Animate in
      setTimeout(() => (lightbox.style.opacity = "1"), 10);

      // Close handlers
      const closeLightbox = () => {
        lightbox.style.opacity = "0";
        setTimeout(() => document.body.removeChild(lightbox), 300);
      };

      closeBtn.addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener("keydown", function escHandler(e) {
        if (e.key === "Escape") {
          closeLightbox();
          document.removeEventListener("keydown", escHandler);
        }
      });
    });
  });
}

// Enhanced Contact Form
function initContactForm() {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success feedback
      submitBtn.textContent = "Message Sent! ✓";
      submitBtn.style.background = "var(--success-color)";

      // Reset form
      contactForm.reset();

      // Show success message
      showNotification(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
    } catch (error) {
      // Error feedback
      submitBtn.textContent = "Failed to send";
      submitBtn.style.background = "var(--error-color, #e74c3c)";
      showNotification(
        "Sorry, there was an error sending your message. Please try again.",
        "error"
      );
    }

    // Reset button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.background = "";
    }, 3000);
  });

  // Enhanced form validation
  const inputs = contactForm.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("focus", clearFieldError);
  });
}

// Field validation
function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  let isValid = true;
  let errorMessage = "";

  switch (field.type) {
    case "email":
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address";
      }
      break;
    case "tel":
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (value && !phoneRegex.test(value.replace(/\s/g, ""))) {
        isValid = false;
        errorMessage = "Please enter a valid phone number";
      }
      break;
  }

  if (field.required && !value) {
    isValid = false;
    errorMessage = "This field is required";
  }

  // Show/hide error
  if (!isValid) {
    showFieldError(field, errorMessage);
  } else {
    clearFieldError({ target: field });
  }
}

function showFieldError(field, message) {
  clearFieldError({ target: field });

  field.style.borderColor = "var(--error-color, #e74c3c)";

  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.textContent = message;
  errorDiv.style.cssText = `
    color: var(--error-color, #e74c3c);
    font-size: 14px;
    margin-top: 5px;
  `;

  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
  const field = e.target;
  field.style.borderColor = "";

  const errorDiv = field.parentNode.querySelector(".field-error");
  if (errorDiv) {
    errorDiv.remove();
  }
}

// Enhanced Back to Top Button
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  let ticking = false;

  function updateBackToTop() {
    const scrollTop = window.scrollY;

    if (scrollTop > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }

    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateBackToTop);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Enhanced Scroll Animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;

        // Use requestAnimationFrame for smooth animations
        requestAnimationFrame(() => {
          // Add appropriate animation class based on element type
          if (element.classList.contains("specialty-card")) {
            element.classList.add("fade-in");
          } else if (element.classList.contains("menu-item")) {
            element.classList.add("slide-in-left");
          } else if (element.classList.contains("testimonial")) {
            element.classList.add("fade-in");
          } else if (element.classList.contains("gallery-item")) {
            element.classList.add("slide-in-right");
          } else {
            element.classList.add("fade-in");
          }
        });

        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animationElements = document.querySelectorAll(`
    .specialty-card,
    .menu-item,
    .testimonial,
    .gallery-item,
    .contact-item,
    .about-text,
    .about-image
  `);

  animationElements.forEach((el) => observer.observe(el));
}

// Particle Effect for Hero Section (Optimized)
function initParticleEffect() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Check if user prefers reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;

  hero.appendChild(canvas);

  let animationId;
  let isVisible = true;

  function resizeCanvas() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  const particles = [];
  const particleCount = 30; // Reduced from 50

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3; // Reduced speed
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5; // Smaller particles
      this.opacity = Math.random() * 0.3 + 0.1; // Reduced opacity
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 215, 0, 0.4)"; // Changed to golden color
      ctx.fill();
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });

    animationId = requestAnimationFrame(animate);
  }

  // Intersection Observer to pause animation when not visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !animationId) {
        animate();
      } else if (!isVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    });
  });

  observer.observe(hero);

  resizeCanvas();
  animate();

  // Throttled resize handler
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 250);
  });
}

// Utility function for notifications
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 300px;
    background: ${
      type === "success"
        ? "var(--success-color)"
        : "var(--error-color, #e74c3c)"
    };
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateX(0)";
  }, 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Apply content from config
function applyConfigContent() {
  if (!config) return;

  // Apply any dynamic content from config file
  // This function can be expanded based on specific config needs
  console.log("Configuration applied successfully");
}
