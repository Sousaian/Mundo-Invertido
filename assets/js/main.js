const switchThemeButtons = document.querySelectorAll(".invert-element");

switchThemeButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
});
