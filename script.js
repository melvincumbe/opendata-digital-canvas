
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();

  // Current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  const body = document.body;

  // Check for saved theme preference or use OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  }

  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
    
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Mobile menu functionality
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });

  // Header scroll effect
  const header = document.getElementById('header');
  
  function checkScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on page load

  // Navigation active state based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavigation() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // Check on page load

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      console.log('Form submitted!');
      
      // Show success toast
      toast.classList.add('show');
      
      // Reset form
      contactForm.reset();
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        toast.classList.remove('show');
      }, 5000);
    });
  }
  
  if (toastClose) {
    toastClose.addEventListener('click', function() {
      toast.classList.remove('show');
    });
  }

  // Scroll to contact section
  const scrollToContact = document.getElementById('scrollToContact');
  
  if (scrollToContact) {
    scrollToContact.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Floating buttons functionality
  const helpButton = document.getElementById('helpButton');
  const actionButtons = document.getElementById('actionButtons');
  
  if (helpButton && actionButtons) {
    helpButton.addEventListener('click', function() {
      actionButtons.classList.toggle('active');
      helpButton.classList.toggle('active');
    });
    
    // Show floating buttons after a delay
    setTimeout(() => {
      document.getElementById('floatingButtons').style.opacity = '1';
    }, 1000);
  }

  // Add animations to elements when they come into view
  function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.service-card, .testimonial-card, .pricing-card, .image-box, .section-title');
    
    elementsToAnimate.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Check on page load
});
