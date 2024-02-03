function toggleTheme() {
  let body = document.body;
  let themeButton = document.getElementById("toggleTheme");

  body.classList.toggle("dark-mode");
  let isDarkMode = body.classList.contains("dark-mode");

  themeButton.addEventListener("click", () => {
    console.log("clicked");
  });
  themeButton.setAttribute("aria-checked", isDarkMode);
  themeButton.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
}
