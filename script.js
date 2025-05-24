
// Header and Navigation
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / Light Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  
  const textArray = ["Full-Stack Developer", "MERN Stack Developer", "Web Application Developer", "Software Developer"];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// AOS Animation
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Initialize skill bars after a short delay
  setTimeout(function() {
    initSkillBars();
  }, 1000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Skills Progress Animation
function initSkillBars() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  skillLevels.forEach(skillLevel => {
    const progressBar = skillLevel.querySelector('.skill-progress');
    if (progressBar) {
      // Reset the width first
      progressBar.style.width = '0';
      
      // Get the target width from the data attribute
      const width = skillLevel.getAttribute('data-width');
      
      // Set a timeout to animate the progress bar
      setTimeout(() => {
        if (width) {
          progressBar.style.width = width;
        }
      }, 300);
    }
  });
}

// Run on scroll to animate progress bars that come into view
window.addEventListener('scroll', function() {
  const skillLevels = document.querySelectorAll('.skill-level');
  
  skillLevels.forEach(skillLevel => {
    const itemPosition = skillLevel.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    const progressBar = skillLevel.querySelector('.skill-progress');
    
    if (itemPosition < screenPosition) {
      const width = skillLevel.getAttribute('data-width');
      if (width && progressBar) {
        progressBar.style.width = width;
      }
    }
  });
});

// Contact Form
function sendEmail(name, email, subject, message) {
  // For demonstration purposes, we'll just log the data to the console
  console.log(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  // In a real application, you would send this data to a server or email service
}

// DOM elements
const sendButton = document.getElementById('send-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Add event listener to the send button
if (sendButton) {
  sendButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput ? subjectInput.value.trim() : 'Contact Form Message';
    const message = messageInput.value.trim();

    // Perform basic validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Call the sendEmail function
    sendEmail(name, email, subject, message);

    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    if (subjectInput) subjectInput.value = '';
    messageInput.value = '';

    // Show success message
    alert('Message sent successfully! I will get back to you soon.');
  });
}

// Back to top button
const backToTopButton = document.createElement('div');
backToTopButton.classList.add('back-to-top');
backToTopButton.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project image hover effect
const projectImages = document.querySelectorAll('.project-image img');
projectImages.forEach(img => {
  img.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease-in-out';
  });
  
  img.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});
