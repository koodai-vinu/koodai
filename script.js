document.querySelectorAll('.category-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.category-group');
    group.classList.toggle('open');
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 900);
});
