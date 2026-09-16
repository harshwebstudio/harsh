/* =====================================================
   HARSH WEB STUDIO
   Vanilla JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const isOpen = navMenu.classList.contains("active");

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    menuToggle.setAttribute(
      "aria-label",
      "Open menu"
    );
  });
});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service || !message) {

    formMessage.textContent =
      "Please complete all fields.";

    return;
  }


  /*
    Replace this number with your WhatsApp number.

    IMPORTANT:
    Country code is required.
    Example for India:
    919876543210
  */

  const whatsappNumber = "919999999999";


  const whatsappMessage =
    `Hello Harsh Web Studio!

Name: ${name}
Phone: ${phone}
Service: ${service}

Project Details:
${message}`;


  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  formMessage.textContent =
    "Opening WhatsApp...";


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );


  contactForm.reset();

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ================= HEADER SCROLL EFFECT ================= */

const header = document.querySelector(".header");

window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 30) {

      header.style.background =
        "rgba(5,5,5,.94)";

    } else {

      header.style.background =
        "rgba(8,8,8,.78)";

    }

  },
  { passive: true }
);
