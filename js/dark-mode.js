const darkMode = {
  init: function () {
    const darkModeThemeSwitch = document.querySelector(".change-theme");

    darkModeThemeSwitch.addEventListener("click", darkMode.handleDarkMode);
    document.addEventListener("mousemove", darkMode.handleMousePointer);
    darkMode.saveDarkMode();
  },

  handleDarkMode: function () {
    const bodyElem = document.querySelector("body");

    bodyElem.classList.toggle("theme-dark");

    if (bodyElem.classList.contains("theme-dark")) {
      localStorage.setItem("isDarkMode", true);
    } else {
      localStorage.setItem("isDarkMode", false);
    }
  },

  saveDarkMode: function () {
    if (localStorage.getItem("isDarkMode") === "true") {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  },
};

export default darkMode;
