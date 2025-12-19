const CACHE_NAME = 'aurelia-desvaux-images-v2';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.ico'];

// Install event - pre-cache critical assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache images on demand
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isImage = IMAGE_EXTENSIONS.some((ext) => url.pathname.toLowerCase().endsWith(ext));

  if (isImage && event.request.method === 'GET') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Return a placeholder or nothing if offline
            return new Response('', { status: 404 });
          });
        });
      })
    );
  }
});
