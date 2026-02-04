document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  if (!menuToggle || !menu) {
    console.error("Falta #menuToggle o #menu en el HTML");
    return;
  }

  const icon = menuToggle.querySelector("i");
  const links = document.querySelectorAll(".link_menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (icon) {
      if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  });
});
