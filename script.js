//nav toggle click in small screens

document.getElementById("menu-toggle").addEventListener("click", function () {

  document.getElementById("mobile-menu").classList.toggle("hidden");

});







//code to make navbar dropdown

document.addEventListener("DOMContentLoaded", function () {

  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");



  dropdownToggles.forEach((toggle) => {

    toggle.addEventListener("click", function (event) {

      event.stopPropagation();

      let dropdownMenu = this.nextElementSibling;

      

      // Hide other dropdowns

      document.querySelectorAll(".dropdown-menu").forEach(menu => {

        if (menu !== dropdownMenu) {

          menu.classList.add("hidden");

        }

      });



      // Toggle current dropdown

      dropdownMenu.classList.toggle("hidden");

    });

  });



  // Hide dropdowns when clicking outside

  document.addEventListener("click", function () {

    document.querySelectorAll(".dropdown-menu").forEach(menu => {

      menu.classList.add("hidden");

    });

  });

});









//scroll to top js

const scrollToTopButton = document.querySelector('.absolute.top-0.right-3.mt-9'); // Select the button using its Tailwind classes



if (scrollToTopButton) {

  scrollToTopButton.addEventListener('click', () => {

    window.scrollTo({

      top: 0,

      behavior: 'smooth' // Optional: Adds a smooth scrolling animation

    });

  });

}





window.addEventListener("scroll", function () {

  const scrollComponent = document.getElementById("scroll-component");

  const scrollThreshold = 200; // Show component after scrolling 200px



  if (window.innerWidth >= 768 && window.scrollY > scrollThreshold) {

    scrollComponent.classList.remove("hidden", "md:hidden");

  } else {

    scrollComponent.classList.add("hidden", "md:hidden");

  }

});