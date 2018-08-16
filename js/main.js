window.addEventListener("DOMContentLoaded", () => {

    const screenText = document.querySelectorAll("p"),
          delay = [100, 2200, 3200, 4200, 5700, 7200];

    screenText.forEach((text, i) => setTimeout(() => text.classList.add("show"), delay[i]));

});
