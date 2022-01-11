document.querySelector(".button").addEventListener("click", openNav);

document.querySelector(".closebtn").addEventListener("click", closeNav);

function openNav() {
  document.querySelector("#myNav").style.width = "100%";
}

function closeNav() {
  document.querySelector("#myNav").style.width = "0%";
}
