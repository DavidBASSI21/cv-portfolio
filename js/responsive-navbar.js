let lastScroll = 0;
let dropdownMenu = document.querySelector('.dropdown_menu');
let scrollUp = document.querySelector('.scrollUp');


const responsiveNavbar = {



  init: function () {
    const toggleBtn = document.querySelector(".navbar .toggle_btn");
    window.addEventListener("scroll", responsiveNavbar.hideAndShowNavbar);
    window.addEventListener("scroll", responsiveNavbar.showscrollUp)
    toggleBtn.addEventListener("click", responsiveNavbar.handleDropdownMenu);
    const navbarLinks = document.querySelectorAll('.navbar-link');
    
    for(let navbarLink of navbarLinks) {
      navbarLink.addEventListener('click', responsiveNavbar.closeMenu)
    }
    
    window.addEventListener("click", responsiveNavbar.handleCloseDropDown)
  },

  handleDropdownMenu: function (event) {
    dropdownMenu = document.querySelector(".dropdown_menu");
    const toggleIconElem = document.querySelector(".toggle_btn i");
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");
    toggleIconElem.classList = isOpen ? "bi-x-lg" : "bi-solid bi-list";
  },

  handleCloseDropDown: function(event) {
    const isOpen = dropdownMenu.classList.contains("open");
    const toggleIconElem = document.querySelector(".toggle_btn i");
    
    if (isOpen && event.target !== toggleIconElem && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('open');
        toggleIconElem.classList = "bi-solid bi-list"; 
    }
    
  },

  showscrollUp: function() {
    if(window.scrollY > 350) {
      scrollUp.classList.add('scrollUpVisible')
    } else if (window.scrollY < 350) {
      scrollUp.classList.remove('scrollUpVisible')
    }

    

  },

  closeMenu: function(event) {
    dropdownMenu.classList.remove('open')
    const toggleIconElem = document.querySelector(".toggle_btn i");

    const isOpen = dropdownMenu.classList.contains("open");

    toggleIconElem.classList = isOpen ? "bi-x-lg" : "bi-solid bi-list";

  },

  hideAndShowNavbar: function (event) {
    const navbarElem = document.querySelector("nav");

    if (window.scrollY < lastScroll) {
      navbarElem.style.top = 0;
    } else if (window.scrollY > 200){
      navbarElem.style.top = "-90px";
    }

    lastScroll = window.scrollY;

  },
};

export default responsiveNavbar;
