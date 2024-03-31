import axios from '@/plugins/axios';

import { groupBy1stLetter } from '@/filters/groupBy1stLetter';
import { groupByTimeAgo } from '@/filters/groupByTimeAgo';
import { IState } from '@/types/state';
import { IContact } from '@/types/contact';
import { Commit } from 'vuex';

const contacts = {
    namespace: true,
    state: () => ({
        contacts: [],
        favoritesOnly: false
    }),
    getters: {
        items: (state: IState) => state.contacts,
        groupBy1stLetter: (state: IState) =>
            groupBy1stLetter(state.contacts, state.favoritesOnly),
        groupByTimeAgo: (state: IState) =>
            groupByTimeAgo(state.contacts, state.favoritesOnly),
        favoritesOnly: (state: IState) => state.favoritesOnly
    },
    mutations: {
        setContacts(state: IState, data: [IContact]) {
            state.contacts = data;
        },
        addContact(state: IState, data: IContact) {
            state.contacts.push(data);
        },
        removeContact(state: IState, id: string) {
            const index = state.contacts.findIndex(
                contact => contact.id === id
            );

            state.contacts.splice(index, 1);
        },
        updateContract(state: IState, newContact: IContact) {
            const index = state.contacts.findIndex(
                contract => contract.id === newContact.id
            );

            state.contacts[index].name = newContact.name;
            state.contacts[index].phone = newContact.phone;
        },
        editFavorite(state: IState, id: string) {
            const index = state.contacts.findIndex(
                contract => contract.id === id
            );

            state.contacts[index].favorite = !state.contacts[index].favorite;
        },
        favoriteOnly(state: IState, value: boolean) {
            state.favoritesOnly = value;
        }
    },
    actions: {
        async index({ commit }: { commit: Commit }) {
            const { data } = await axios.get('/contacts');

            commit('setContacts', data);

            return data;
        },
        async save({ commit }: { commit: Commit }, contact: IContact) {
            const data = await axios.post(`/contacts`, contact);
            commit('addContact', data.data);
        },
        async delete({ commit }: { commit: Commit }, id: string) {
            await axios.delete(`/contacts/${id}`);

            commit('removeContact', id);
        },
        async edit({ commit }: { commit: Commit }, contact: IContact) {
            console.log(contact);
            const data = await axios.put(`/contacts/${contact.id}`, contact);

            commit('updateContract', data.data);
        },
        async editFavorite({ commit }: { commit: Commit }, id: string) {
            commit('editFavorite', id);
        },
        async favoriteOnly({ commit }: { commit: Commit }, value: boolean) {
            commit('favoriteOnly', value);
        }
    }
};

export default contacts;
