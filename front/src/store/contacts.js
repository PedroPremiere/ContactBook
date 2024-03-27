import axios from '@/plugins/axios';

import { groupBy1stLetter } from '@/filters/groupBy1stLetter';
import { groupByTimeAgo } from '@/filters/groupByTimeAgo';

const contacts = {
    namespace: true,
    state: () => ({
        contacts: [],
        favoritesOnly: false
    }),
    getters: {
        items: state => state.contacts,
        groupBy1stLetter: state =>
            groupBy1stLetter(state.contacts, state.favoritesOnly),
        groupByTimeAgo: state =>
            groupByTimeAgo(state.contacts, state.favoritesOnly),
        favoritesOnly: state => state.favoritesOnly
    },
    mutations: {
        setContacts(state, data) {
            state.contacts = data;
        },
        addContact(state, data) {
            state.contacts.push(data);
        },
        removeContact(state, id) {
            const index = state.contacts.findIndex(
                contact => contact.id === id
            );

            state.contacts.splice(index, 1);
        },
        updateContract(state, newContact) {
            const index = state.contacts.findIndex(
                contract => contract.id === newContact.id
            );

            state.contacts[index].name = newContact.name;
            state.contacts[index].phone = newContact.phone;
        },
        editFavorite(state, id) {
            const index = state.contacts.findIndex(
                contract => contract.id === id
            );

            state.contacts[index].favorite = !state.contacts[index].favorite;
        },
        favoriteOnly(state, value) {
            state.favoritesOnly = value;
        }
    },
    actions: {
        async index({ commit }) {
            const { data } = await axios.get('/contacts');

            commit('setContacts', data);

            return data;
        },
        async save({ commit }, contact) {
            const data = await axios.post(`/contacts`, contact);
            commit('addContact', data.data);
        },
        async delete({ commit }, id) {
            await axios.delete(`/contacts/${id}`);

            commit('removeContact', id);
        },
        async edit({ commit }, contact) {
            const data = await axios.put(`/contacts/${contact.id}`, contact);
            console.log(data.data);
            commit('updateContract', data.data);
        },
        async editFavorite({ commit }, id) {
            commit('editFavorite', id);
        },
        async favoriteOnly({ commit }, value) {
            commit('favoriteOnly', value);
        }
    }
};

export default contacts;
