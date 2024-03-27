export async function deleteInterceptor(url, contacts) {
    const id = url.toString().split('/').slice(-1).join('');

    const index = contacts.findIndex(contact => contact.id === id);

    contacts.splice(index, 1);

    return Response.json(id, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PATCH, PUT, DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    });
}
