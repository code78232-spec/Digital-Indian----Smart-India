const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const presentationBtn = document.getElementById("presentationBtn");

menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "74px";
    nav.style.right = "20px";
    nav.style.flexDirection = "column";
    nav.style.background = "white";
    nav.style.padding = "18px";
    nav.style.borderRadius = "15px";
    nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.15)";
  }
});

presentationBtn?.addEventListener("click", () => {
  document.body.classList.toggle("presentation-mode");
  presentationBtn.textContent = document.body.classList.contains("presentation-mode")
    ? "Exit presentation mode"
    : "Presentation mode ⛶";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) nav.style.display = "none";
  });
});
