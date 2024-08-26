importScripts('https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.bundle.js');
importScripts('/static/uv/uv.config.js');
importScripts('https://dont-sue-me-topvaz.topvazgeo.online/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
