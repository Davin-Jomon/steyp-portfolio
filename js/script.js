const blocks = document.querySelectorAll('.block');
const cards = document.querySelectorAll('.project-card');

function revealBlocksOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    if (blockTop < triggerBottom) {
      block.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealBlocksOnScroll);
window.addEventListener('load', revealBlocksOnScroll);


function revealCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}


window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('load', revealCardsOnScroll);


(function () {
  emailjs.init("aumi8ArYg2oAEeOvr"); 
})();

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_ssyssx5', 'template_bc4rhsj', this)
    .then(() => {
      message.textContent = "Message sent successfully!";
      message.style.color = "Green";
      form.reset();
    }, (error) => {
      message.textContent = "Failed to send message. Try again!";
      message.style.color = "red";
      console.error(error);
    });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
observer.observe(document.getElementById("contactForm"));


const projectsContainer = document.querySelector('.projects-scroll-container');
if (projectsContainer) {
  projectsContainer.addEventListener('touchstart', function() {
    this.style.cursor = 'grabbing';
  });
  
  projectsContainer.addEventListener('touchend', function() {
    this.style.cursor = 'grab';
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function() {
    setTimeout(() => {
      document.getElementById("formMessage").scrollIntoView({behavior: 'smooth'});
    }, 200);
  });
}