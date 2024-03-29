import { IContact } from '@/types/contact';

export async function deleteInterceptor(url: string, contacts: IContact[]) {
    const id = url.toString().split('/').slice(-1).join('');

    const index = contacts.findIndex(contact => contact.id === id);

    contacts.splice(index, 1);

    return new Response(JSON.stringify(id), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PATCH, PUT, DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    });
}
