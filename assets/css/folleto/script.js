// Navegación entre "pantallas"
document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-goto");
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("active", screen.id === targetId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Acordeones
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    parent.classList.toggle("open");
  });
});
