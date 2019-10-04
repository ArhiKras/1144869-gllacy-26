// JavaScript Document

var link = document.querySelector(".feedback-link");

var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".modal-feedback");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comments]");
var close = popup.querySelector(".modal-close");

var isStorageSupport = true;
var storageOne = "";
var storageTwo = "";

try {
  storageOne = localStorage.getItem("login");
  storageTwo = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("show-overlay");

  if (storageOne, storageTwo) {
    login.value = storageOne;
    email.value = storageTwo;
    comment.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("show-overlay");
});

overlay.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("show-overlay");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("show-overlay");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});
