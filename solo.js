// Preloader //
function loading() {
  document.querySelector(".preloader").classList.add("opacity");
}
setTimeout(loading, 2000);

// End preloader //

// Navbar //
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

function myFunction() {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    document.querySelector(".navbar-row").classList.remove("navbar-trans");
    document.querySelector(".navbar-row").classList.add("navbar-dark");
  } else {
    document.querySelector(".navbar-row").classList.remove("navbar-dark");
    document.querySelector(".navbar-row").classList.add("navbar-trans");
  }
}

window.onscroll = () => {
  myFunction();
};

// End Navbar //

// add 'highlight' class to the open button
let coll = document.querySelectorAll(".collapse.show");
coll.forEach((item) => {
  if (item.previousElementSibling.classList.contains("accordion-header")) {
    item.previousElementSibling.classList.add("highlight");
  }
});

// add "highlight" class to the click/open button and remove from the closed ones
document.querySelectorAll(".accordion-button").forEach((item) => {
  item.addEventListener("click", () => {
    // remove highlight class from the closed button
    document.querySelectorAll(".accordion-button").forEach((citem) => {
      if (citem != item) {
        citem.parentElement.classList.remove("highlight");
      }
    });
    // toggle highlight class on click
    item.parentElement.classList.toggle("highlight");
  });
});
