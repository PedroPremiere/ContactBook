import { IContact } from '@/types/contact';

export async function putInterceptor(
    event: FetchEvent,
    url: string,
    contacts: IContact[]
) {
    const clonedBody = await event.request.json();

    console.log(clonedBody);

    const id = url.toString().split('/').slice(-1).join('');
    console.log(id);
    const index = contacts.findIndex(contact => contact.id === id);
    console.log(index);
    contacts[index] = clonedBody;
    console.log(contacts[index]);
    return new Response(JSON.stringify(contacts[index]), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PATCH, PUT, DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    });
}
