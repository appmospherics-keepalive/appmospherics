// appmospherics service worker.
// It exists only so phones can install the app from the browser menu.
// It does not cache or store anything: every request goes straight to the network as usual.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
// Only plain page requests pass through here; everything else (scans, maps) is left to the browser untouched.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request));
});
