const switchThemeButton = document.getElementById("switch-theme-button");

switchThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});