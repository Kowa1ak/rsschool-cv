document.getElementById("theme-toggle").addEventListener("change", function () {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
});
