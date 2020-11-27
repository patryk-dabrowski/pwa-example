const cacheName = "pwd-example";
const filesToCache = ["./", "./index.html", "./style.css", "./index.js"];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  console.log("e.request.url", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      console.log("response", response);
      return response || fetch(e.request);
    })
  );
});