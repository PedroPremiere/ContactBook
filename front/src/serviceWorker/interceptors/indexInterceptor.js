export function indexInterceptor(contacts) {
    return Response.json(contacts, {
        status: 200
    });
}
