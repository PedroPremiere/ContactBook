import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

import { seed } from '@/serviceWorker/seed';
import { putInterceptor } from '@/serviceWorker/interceptors/putInterceptor';
import { deleteInterceptor } from '@/serviceWorker/interceptors/deleteInterceptor';
import { postInterceptor } from '@/serviceWorker/interceptors/postInterceptor';
import { indexInterceptor } from '@/serviceWorker/interceptors/indexInterceptor';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
precacheAndRoute(self.__WB_MANIFEST);

const contacts = seed([]);

self.addEventListener('install', () => {
    console.log('installed');
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    const url = event.request.url;
    const method = event.request.method;

    if (method === 'GET' && url.endsWith('contacts')) {
        event.respondWith(indexInterceptor(contacts));
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
