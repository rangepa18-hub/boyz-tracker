self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("boyz-tracker-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "boyz.jpg",
        "boyz-icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
