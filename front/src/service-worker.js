import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

import { seed } from '@/serviceWorker/seed';
import { putInterceptor } from '@/serviceWorker/interceptors/putInterceptor';
import { deleteInterceptor } from '@/serviceWorker/interceptors/deleteInterceptor';
import { postInterceptor } from '@/serviceWorker/interceptors/postInterceptor';
import { indexInterceptor } from '@/serviceWorker/interceptors/indexInterceptor';

precacheAndRoute(self.__WB_MANIFEST);

const contacts = [];

self.addEventListener('install', () => {
    seed(contacts);
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    const url = event.request.url;
    const method = event.request.method;

    if (method === 'GET' && url.endsWith('contacts')) {
        event.respondWith(indexInterceptor(contacts, event));
    }

    if (method === 'POST' && url.endsWith('contacts')) {
        event.respondWith(postInterceptor(event, contacts));
    }

    if (method === 'DELETE' && url.toString().includes('contacts')) {
        event.respondWith(deleteInterceptor(url, contacts));
    }

    if (method === 'PUT' && url.toString().includes('contacts')) {
        event.respondWith(putInterceptor(event, url, contacts));
    }
});
