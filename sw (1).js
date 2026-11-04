const CACHE = 'lp-v2';
const SHELL = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icon-192.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// File aplikasi: ambil versi terbaru dari jaringan dulu (supaya update langsung tampil); bila offline pakai cache.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    try { const res = await fetch(r, { cache: 'no-cache' }); if (res.ok) c.put(r, res.clone()); return res; }
    catch (x) { return (await c.match(r, { ignoreSearch: true })) || Response.error(); }
  }));
});
