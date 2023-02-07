document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const currentYear = new Date().getFullYear();
    const copyright = document.querySelector("#copyright");
    copyright.innerHTML = "Website design and Implemented by Jack Griffin Copyright &copy; " + currentYear;
});
