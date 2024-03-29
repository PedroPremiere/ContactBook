import { IContact } from '@/types/contact';

export function indexInterceptor(contacts: IContact[]) {
    return new Response(JSON.stringify(contacts), {
        status: 200
    });
}
