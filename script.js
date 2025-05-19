
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Set current year in footer
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
  
  // Close toast when close button is clicked
  const toastClose = document.querySelector('.toast-close');
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
    const elementsToAnimate = document.querySelectorAll('.about-content, .pricing-card, .service-card, .contact-container');
    
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
  
  // Services data
  const servicesData = [
    {
      icon: 'server',
      title: 'Hospedagem de Sites',
      description: 'Soluções de hospedagem confiáveis e de alta performance para manter seu site online 24/7.',
      link: '#contact'
    },
    {
      icon: 'globe',
      title: 'Domínios Personalizados',
      description: 'Registre domínios personalizados que representem a sua marca e facilitem o acesso ao seu site.',
      link: '#contact'
    },
    {
      icon: 'mail',
      title: 'E-mails Profissionais',
      description: 'Contas de e-mail com seu domínio para comunicação profissional e confiável com seus clientes.',
      link: '#contact'
    },
    {
      icon: 'shield',
      title: 'Certificados SSL',
      description: 'Proteja seus dados e de seus clientes com certificados SSL que garantem uma navegação segura.',
      link: '#contact'
    },
    {
      icon: 'settings',
      title: 'Serviços Técnicos',
      description: 'Suporte técnico especializado para resolver problemas e otimizar sua presença digital.',
      link: '#contact'
    },
    {
      icon: 'code',
      title: 'Desenvolvimento Web',
      description: 'Desenvolvimento de sites e aplicativos web personalizados para atender às necessidades do seu negócio.',
      link: '#contact'
    }
  ];
  
  // Pricing plans data
  const pricingPlans = [
    {
      title: "Pacote Simples",
      price: "280 MT",
      period: "/mês",
      description: "Ideal para pequenos negócios e profissionais liberais.",
      features: [
        "1 Domínio",
        "10GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "5 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: false
    },
    {
      title: "Pacote 2",
      price: "560 MT",
      period: "/mês",
      description: "Para empresas em crescimento que precisam de mais recursos.",
      features: [
        "3 Domínios",
        "25GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "20 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: true
    },
    {
      title: "Pacote 3",
      price: "780 MT",
      period: "/mês",
      description: "Solução completa para empresas estabelecidas.",
      features: [
        "5 Domínios",
        "50GB de Espaço",
        "Tráfego Ilimitado",
        "Anti-spam Profissional",
        "Backup Diário Remoto",
        "Segurança Imunify360",
        "50 Contas de Email",
        "Certificado SSL"
      ],
      isPopular: false
    }
  ];
  
  // Generate services cards
  const servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    servicesData.forEach((service, index) => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.style.animationDelay = `${index * 0.1}s`;
      
      serviceCard.innerHTML = `
        <div class="service-icon">
          <i data-lucide="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <a href="${service.link}" class="service-link">
          Saiba mais
          <i data-lucide="arrow-right"></i>
        </a>
      `;
      
      servicesGrid.appendChild(serviceCard);
    });
    
    // Re-initialize Lucide icons after adding new elements
    lucide.createIcons();
  }
  
  // Generate pricing cards
  const pricingCards = document.querySelector('.pricing-cards');
  if (pricingCards) {
    pricingPlans.forEach((plan, index) => {
      const pricingCard = document.createElement('div');
      pricingCard.className = `pricing-card ${plan.isPopular ? 'popular' : ''}`;
      pricingCard.style.animationDelay = `${index * 0.1}s`;
      
      let featuresHtml = '';
      plan.features.forEach(feature => {
        featuresHtml += `
          <li>
            <i data-lucide="check"></i>
            <span>${feature}</span>
          </li>
        `;
      });
      
      pricingCard.innerHTML = `
        ${plan.isPopular ? '<div class="popular-badge">Mais Popular</div>' : ''}
        <div class="pricing-header">
          <h3 class="pricing-title">${plan.title}</h3>
          <div class="pricing-price">
            ${plan.price}<span class="pricing-period">${plan.period}</span>
          </div>
          <p class="pricing-description">${plan.description}</p>
        </div>
        <ul class="features-list">
          ${featuresHtml}
        </ul>
        <a href="#contact" class="btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'} btn-full">
          Contratar Agora
        </a>
      `;
      
      pricingCards.appendChild(pricingCard);
    });
    
    // Re-initialize Lucide icons after adding new elements
    lucide.createIcons();
  }
});
