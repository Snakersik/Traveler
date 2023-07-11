

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