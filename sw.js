const CACHE_NAME = 'epub-reader-v1';
const ASSETS_TO_CACHE = [
  './', // 确保路径正确
  './index.html', // 确保路径正确
  './styles.css', // 确保路径正确
  './jszip.min.js', // 确保路径正确
  './epub.min.js', // 确保路径正确
  './192x192.png', // 确保路径正确
  './512x512.png', // 确保路径正确
  './manifest.json' // 确保路径正确
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
