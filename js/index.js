import translation from "./translation.js";
import darkMode from "./dark-mode.js";
import responsiveNavbar from "./responsive-navbar.js";
import heart from "./heart.js";
import scrollup from "./scrollup.js";
import body from "./body.js";

const app = {
  init: function () {
    darkMode.init();
    responsiveNavbar.init();
    heart.init();
    scrollup.init()
    body.init()
    translation.init()
  },
};

window.addEventListener("DOMContentLoaded", app.init);
