// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Navbar scroll effect
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Active navigation link
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document
  .querySelectorAll(".skill-category, .project-card, .timeline-item, .about-text, .contact-info")
  .forEach((el) => {
    observer.observe(el)
  })

// Contact form handling
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const originalText = heroTitle.textContent
    typeWriter(heroTitle, originalText, 50)
  }
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Skills animation on scroll
const skillItems = document.querySelectorAll(".skill-item")
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
        }, index * 100)
      }
    })
  },
  { threshold: 0.5 },
)

skillItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateX(-20px)"
  item.style.transition = "all 0.6s ease"
  skillObserver.observe(item)
})

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Floating elements animation
document.querySelectorAll(".floating-element").forEach((element, index) => {
  element.style.animationDelay = `${index * 0.5}s`
})

// Add scroll progress indicator
const scrollProgress = document.createElement("div")
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    z-index: 9999;
    transition: width 0.1s ease;
`
document.body.appendChild(scrollProgress)

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset
  const docHeight = document.body.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  scrollProgress.style.width = scrollPercent + "%"
})

// Add theme toggle functionality
const themeToggle = document.createElement("button")
themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
themeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    z-index: 1000;
    transition: all 0.3s ease;
`

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
  const icon = themeToggle.querySelector("i")
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "fas fa-sun"
  } else {
    icon.className = "fas fa-moon"
  }
})

document.body.appendChild(themeToggle)

// Add CSS for dark theme
const darkThemeCSS = `
    .dark-theme {
        --text-primary: #f8fafc;
        --text-secondary: #cbd5e1;
        --text-light: #94a3b8;
        --bg-primary: #0f172a;
        --bg-secondary: #1e293b;
        --border-color: #334155;
    }
    
    .dark-theme .navbar {
        background: rgba(15, 23, 42, 0.95);
    }
    
    .dark-theme .skill-category,
    .dark-theme .project-card,
    .dark-theme .timeline-content,
    .dark-theme .contact-form {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
    }
`

const styleSheet = document.createElement("style")
styleSheet.textContent = darkThemeCSS
document.head.appendChild(styleSheet)
