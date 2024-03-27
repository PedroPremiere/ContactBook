import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

import {
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';

precacheAndRoute(self.__WB_MANIFEST);

const contacts = [];

//todo
function seed() {
    for (let i = 0; i < 10; i++) {
        contacts.push({
            name: randFullName(),
            phone: randPhoneNumber(),
            createDate: randRecentDate(),
            id: randUuid(),
            favorite: false
        });
    }
}

self.addEventListener('install', () => {
    seed();
    console.log('SW zainstalowany!');
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
    const url = event.request.url;
    const method = event.request.method;

    if (method === 'GET' && url.endsWith('contacts')) {
        const myResponse = Response.json(contacts, {
            status: 200,
            headers: { contentType: 'application/json' }
        });

        event.respondWith(myResponse);
    }
});
