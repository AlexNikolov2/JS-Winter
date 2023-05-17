function toggleHamburger() {
  let navbar = document.getElementById("navbar");
  let burger = document.getElementById("burger");
  let navbarLinks = document.getElementById("navbar-links");

  burger.addEventListener("click", () => {
    if (navbarLinks.style.display === "flex") {
      navbarLinks.style.display = "none";
      navbarLinks.style.flexDirection = "row";
      burger.classList.remove("toggled");
      burger.classList.add("untoggled");
    } else {
      navbarLinks.style.display = "flex";
      navbarLinks.style.flexDirection = "column";
      navbarLinks.style.width = "100%";
      navbarLinks.style.alignItems = "center";
      navbarLinks.style.justifyContent = "center";
      navbar.style.flexDirection = "column-reverse";
      burger.classList.add("toggled");
      burger.classList.remove("untoggled");
    }
  });
}
