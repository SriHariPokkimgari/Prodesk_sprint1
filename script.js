var body = document.body;
var menuBtn = document.getElementById("menu-toggle");
var nav = document.getElementById("nav-menu");

/* ----- Mobile menu ----- */
function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuBtn.addEventListener("click", function () {
  setMenu(!nav.classList.contains("open"));
});
nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A") setMenu(false);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") setMenu(false);
});

/* ----- Footer year ----- */
document.getElementById("year").textContent = new Date().getFullYear();
