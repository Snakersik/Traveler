const allSections = document.querySelectorAll(".fade-in");
const navbar = document.querySelector("nav");
const navRight = document.getElementById("nav-right");
const loader = document.querySelector(".loader");
const logo = document.querySelector(".logo");

const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const openModal = document.getElementById("openModal");

function scrollToSection(sectionSelector) {
  const section = document.querySelector(sectionSelector);
  section.scrollIntoView({ behavior: "smooth" });
  myFunction();
}

function myFunction() {
  console.log("click");
  console.log(navRight);
  if (navRight.className === "navbar-right") {
    navRight.className += " responsive";
  } else {
    navRight.className = "navbar-right";
  }
}

navRight.addEventListener("focusout", (event) => {
  navRight.className = navRight.className.replace("responsive", "").trim();
});

const revealElements = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("content-hidden");
    observer.unobserve(entry.target);
  });
};

const sectionsObserver = new IntersectionObserver(revealElements, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((sec) => {
  sec.classList.add("content-hidden");
  sectionsObserver.observe(sec);
});

addEventListener("load", function () {
  loader.style.display = "none";
});

document.addEventListener("click", function (event) {
  const isInsidenav =
    navRight.contains(event.target) || logo.contains(event.target);
  if (!isInsidenav && navRight.className !== "navbar-right") {
    myFunction();
  }
});

function ActiveChange(tabbutton, tabcontent) {
  const link = document.querySelector(tabbutton);
  const content = document.querySelector(tabcontent);

  if (link.classList.contains("active-line")) return;

  const active = document.querySelector(".active-line");
  const activebar = document.querySelector(".active-tab");

  active.classList.remove("active-line");
  activebar?.classList.remove("active-tab");

  link.classList.add("active-line");
  content.classList.add("active-tab");
}

openModal.onclick = () => {
  modal.style.display = "block";

};

// closeModal.onclick = () => {
//   modal.style.display = "none";
// };

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

addEventListener("keydown", (e) => {
  console.log(modal.style.display)
  
  if (e.key === "Escape") modal.style.display = "none";
});


