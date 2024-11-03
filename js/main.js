// owl-carosuol

$(document).ready(function () {
    $("#testimonial-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
    });
  });


  const navbar = document.getElementById("navbar-example");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.querySelector(".navbar-toggler");
    const navContent = document.getElementById("navbarSupportedContent");
  
    navButton.addEventListener("click", function () {
      navContent.classList.toggle("show");
    });
  });
  
