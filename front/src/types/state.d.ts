import { IContact } from '@/types/contact';

export interface IState {
    contacts: IContact[];
    favoritesOnly: boolean;
}
