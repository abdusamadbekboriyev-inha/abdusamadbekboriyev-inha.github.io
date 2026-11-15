const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  btn.textContent = isDark ? "Dark Mode" : "Light Mode";
});
