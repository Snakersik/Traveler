
const allSections = document.querySelectorAll('.flex-container-column')
const scrollToSection1 = () =>{
    document.querySelector('#section--1').scrollIntoView({behavior: 'smooth'})

}

function scrollToHome(){
    document.querySelector('.main').scrollIntoView({behavior: 'smooth'})
}


function myFunction() {
    var x = document.getElementById("nav-right");
    if (x.className === "navbar-right") {
      x.className += " responsive";
    } else {
      x.className = "navbar-right";
    }
  }


const revealElements = (entries, observer) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) return ;
        entry.target.classList.remove('section-hidden');
        

    })
}

 
  const sectionsObserver = new IntersectionObserver(revealElements, {
    root: null,
    threshold: 0.20,
  });
 allSections.forEach((sec) => {
    sec.classList.add('section-hidden')
    sectionsObserver.observe(sec)
 })


