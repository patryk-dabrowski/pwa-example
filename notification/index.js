let swRegistration = null;

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((swReg) => {
        swRegistration = swReg;
      })
      .catch((error) => console.error("Service Worker Error", error));
  }
};

function notifyMe() {
  if (!("Notification" in window)) {
    alert("Ta przeglądarka nie obsługuje powiadomień");
  } else if (Notification.permission === "granted") {
    notification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission((permission) => {
      if (permission === "granted") {
        notification();
      }
    });
  }
}

function notification() {
  const options = {
    body: "Hello world",
  };
  swRegistration.showNotification("Hello world", options);
}
