function toggleHamburger() {
  let navbar = document.getElementById("navbar");
  let burger = document.getElementById("burger");
  let navbarLinks = document.getElementById("navbar-links");

  burger.addEventListener("click", () => {
    if (navbarLinks.style.display === "flex") {
      navbarLinks.style.display = "none";
      navbarLinks.style.flexDirection = "row";
    } else {
      navbarLinks.style.display = "flex";
      navbar.style.flexDirection = "column-reverse";
      navbarLinks.style.flexDirection = "column";
    }
  });
}
