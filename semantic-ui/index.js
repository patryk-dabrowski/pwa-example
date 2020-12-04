const uploadBtn = document.querySelector(".upload-btn");
const uploadInput = document.querySelector(".upload-input");
const image = document.querySelector("img.image");

const uploadImage = () => {
  uploadInput.click();
};

function handleFile() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
}

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  uploadBtn.addEventListener("click", uploadImage);
  uploadInput.addEventListener("change", handleFile);
};
