// Fade-in effect on scroll
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add("invisible");
  observer.observe(section);
});
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close when clicking outside modal content
window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
