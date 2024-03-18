const aboutSection = document.querySelector(".about-section");
const aboutMeBtn = document.querySelector(".about-me-btn");
const xIcon = document.querySelector(".x-icon");
const navbar = document.querySelector(".navbar");
const socialIcons = document.querySelector(".social-links");
const overlay = document.querySelector(".overlay");
const bodyContainer = document.querySelector("#body-container");
const latestWorks = document.querySelector(".latest-works-link");
const downArrow = document.querySelector(".down-arrow");
const latestWorksArrow = document.querySelector(".latest-works-arrow");
const blackLogo = document.querySelector(".black-logo");
const contactForm = document.querySelector(".contact");
const sendButton = document.querySelector(".submit-btn");
const mainSection = document.querySelector(".main-section");

//Sun and Moon icon document selector
const icon = document.getElementById("icon");

//form label selection
var contact_section = document.querySelector(".contact-section");
var label1 = contact_section.querySelector(".label1");
var label2 = contact_section.querySelector(".label2");
var label3 = contact_section.querySelector(".label3");

//when icon is clicked theme is toggled
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  //if theme is dark then sun icon will be displayed
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  }
  //else moon icon will by default be displayed
  else {
    icon.src = "images/moon.png";
  }
  //if theme is dark then form label is white else will remain black
  label1.style.color = "white";
  label2.style.color = "white";
  label3.style.color = "white";
};

aboutMeBtn.addEventListener("click", () => {
  aboutSection.classList.add("active");
  overlay.classList.add("active");
  navbar.classList.add("hidden");
  navbar.classList.add("hidden");
  socialIcons.classList.add("hidden");
  disableScroll();
});

xIcon.addEventListener("click", () => {
  aboutSection.classList.remove("active");
  overlay.classList.remove("active");
  navbar.classList.remove("hidden");
  socialIcons.classList.remove("hidden");
  enableScroll();
});

overlay.addEventListener("click", () => {
  aboutSection.classList.remove("active");
  overlay.classList.remove("active");
  navbar.classList.remove("hidden");
  socialIcons.classList.remove("hidden");
  enableScroll();
});

// canvas.addEventListener('wheel', (e) => {
//   window.scrollTo(0, (mainSection.clientHeight * e.deltaY) / Math.abs(e.deltaY))
// })

latestWorks.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});

downArrow.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});

latestWorksArrow.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});

blackLogo.addEventListener("click", (e) => {
  scrollTo(0, 0);
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let myForm = contactForm;
  let formData = new FormData(myForm);
  console.log(new URLSearchParams(formData).toString());
  const buttonText = sendButton.innerHTML;
  fetch('https://formspree.io/f/xdoqlelk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      sendButton.classList.add('sent')
      sendButton.innerHTML = 'Message Sent'
      console.log('Message Sent Successfully')
    })
    .catch((error) => {
      sendButton.classList.add('notSent')
      sendButton.innerHTML = `Something went wrong!`
      console.log(error)
    })
    .finally(() => {
      setTimeout(() => {
        sendButton.classList.remove('sent')
        sendButton.classList.remove('notSent')
        sendButton.innerHTML = buttonText
      }, 3000)
    })

  Array.from(contactForm.children).forEach((child, i) => {
    if (i % 2) {
      console.log(child);
      child.value = "";
    }
  });
});