// @ts-nocheck
document.addEventListener("DOMContentLoaded", () => {
  let nav_menu = document.getElementsByClassName("nav-menu")[0];
  let btnMenuShow = document.getElementById("responsive-btn");
  let contactBtn = document.getElementById("contact-btn");

  btnMenuShow?.addEventListener("click", () => {
    nav_menu.classList.toggle("show-nav-menu");
  });

  nav_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("show-nav-menu");
  });

  contactBtn.addEventListener("click", (e) => {
    console.log('this');
    window.location.pathname = '../pages/contact.html';
  });
});
