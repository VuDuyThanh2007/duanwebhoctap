document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".accordion-btn");
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = content.style.display === "block";
  
        document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
        document.querySelectorAll(".accordion-btn").forEach(b => b.classList.remove("active"));
  
        if (!isOpen) {
          content.style.display = "block";
          btn.classList.add("active");
        }
      });
    });
  });
  