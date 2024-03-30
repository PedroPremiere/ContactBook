import { IContact } from '@/types/contact';

export interface IState {
    contacts: IContact[];
    favoritesOnly: boolean;
    isDeleteModalOpen: boolean;
    isEditModalOpen: boolean;
    selectedItemForDelete: IContact;
    selectedItemForEdit: IContact;
}
