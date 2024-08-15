document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const text = "I'm Sanchit";
    const typingSpeed = 150;
    const repeatDelay = 5000;
  
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          typewriterElement.innerHTML = '';
          index = 0;
          type();
        }, repeatDelay);
      }
    }
  
    type();

    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul.nav-links li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
      var nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    // Scroll to top when logo is clicked
    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  


  // Add an event listener to the form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  

  // Send email using SMTPJS
  Email.send({
      Host: "smtp.elasticemail.com", // Replace with your SMTP server
      Username: "gamecreation11@gmail.com",     // Replace with your SMTP username
      Password: "2669A9A6FCB9A5DFC46F976623F2BC28152D",     // Replace with your SMTP password
      To: 'gamecreation11@gmail.com',   // Replace with the recipient email address
      From: 'gamecreation11@gmail.com',                   // Use the provided email as the sender
      Subject: `Feedback from ${name}`,
      Body: `Name: ${name}<br>Email: ${email}<br>Comment: ${comment}`
    }).then(message => {
      // Show the success message
      document.getElementById('successMessage').style.display = 'block';

      // Hide the success message after 5 seconds
      setTimeout(() => {
          document.getElementById('successMessage').style.display = 'none';
      }, 5000); // 5000 milliseconds = 5 seconds

      // Reset the form
      document.getElementById('feedbackForm').reset();
  }).catch(error => {
      alert('Failed to send feedback. Please try again later.'); // Show error message
  });
});




document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about-us');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              aboutSection.classList.add('in-view');
          } else {
              aboutSection.classList.remove('in-view');
          }
      });
  }, {
      threshold: 0.1 // Trigger when 10% of the section is in view
  });

  observer.observe(aboutSection);
});



document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              entry.target.classList.remove('animate-out');
          } else {
              entry.target.classList.remove('animate-in');
              entry.target.classList.add('animate-out');
          }
      });
  }, observerOptions);

  const skillRows = document.querySelectorAll('.skill-row');
  skillRows.forEach(row => {
      observer.observe(row);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
          } else {
              entry.target.classList.remove('animate-in');
          }
      });
  }, observerOptions);

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
      observer.observe(card);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
          } else {
              entry.target.classList.remove('animate-in');
          }
      });
  }, observerOptions);

  const profileCard = document.querySelector('.profile-card');
  const feedbackForm = document.querySelector('.feedback-form');

  observer.observe(profileCard);
  observer.observe(feedbackForm);
});



const greetings = ['नमस्कार', 'Hello', 'नमस्ते'];
let index = 0;

function changeGreeting() {
    const h2 = document.getElementById('greeting');
    h2.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        h2.textContent = `${greetings[index]},`; // Add comma after greeting
        h2.style.opacity = 1; // Fade in effect
        index = (index + 1) % greetings.length;
    }, 800); // Match the duration of the fade-out effect
}

setInterval(changeGreeting, 2000); // Change every 2 seconds


// smooth scrolling 
// document.addEventListener("DOMContentLoaded", function () {
//   const scroll = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//   });
// });


var loader = document.querySelector("#loader");

setTimeout(() => {
    loader.style.top ="-100%"
}, 4000);