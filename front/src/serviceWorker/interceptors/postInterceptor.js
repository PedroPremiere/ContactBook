export async function postInterceptor(event, contacts) {
    let clonedBody = await event.request.json();

    contacts.push(clonedBody);
    return Response.json(clonedBody, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PATCH, PUT, DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
    });
}
