import { IContact } from '@/types/contact';

export async function postInterceptor(event: FetchEvent, contacts: [IContact]) {
    const clonedBody = await event.request.json();

    contacts.push(clonedBody);
    return new Response(JSON.stringify(clonedBody), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PATCH, PUT, DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    });
}
