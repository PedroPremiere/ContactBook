import {
    randFullName,
    randPhoneNumber,
    randRecentDate,
    randUuid
} from '@ngneat/falso';
import { groupBy1stLetter } from '@/filters/groupBy1stLetter';
import { groupByTimeAgo } from '@/filters/groupByTimeAgo';

const contacts = {
    namespace: true,
    state: () => ({
        contacts: [
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            },
            {
                name: randFullName(),
                phone: randPhoneNumber(),
                createDate: randRecentDate(),
                id: randUuid(),
                favorite: false
            }
        ]
    }),
    getters: {
        items: state => state.contacts,
        groupBy1stLetter: state => groupBy1stLetter(state.contacts),
        groupByTimeAgo: state => groupByTimeAgo(state.contacts)
    },
    mutations: {
        addContact(state, data) {
            state.contacts.push(data);
        },
        removeContact(state, id) {
            const index = state.contacts.findIndex(
                contact => contact.id === id
            );

            console.log(id);

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
        }
    },
    actions: {
        async save({ commit }, contact) {
            /*
            if (contract.id) {
                const data = await this.$axios.$put(
                    `/contracts/${contract.id}`,
                    contract
                );

                commit('updateContract', data);
            } else {

             */
            //  let data = await this.$axios.$post('/contracts', contract);

            commit('addContact', contact);
            //}
        },
        async delete({ commit }, id) {
            /*
            if (contract.id) {
                const data = await this.$axios.$put(
                    `/contracts/${contract.id}`,
                    contract
                );

                commit('updateContract', data);
            } else {

             */
            //  let data = await this.$axios.$post('/contracts', contract);

            commit('removeContact', id);
            //}
        },
        async edit({ commit }, contact) {
            /*
            if (contract.id) {
                const data = await this.$axios.$put(
                    `/contracts/${contract.id}`,
                    contract
                );

                commit('updateContract', data);
            } else {

             */
            //  let data = await this.$axios.$post('/contracts', contract);

            commit('updateContract', contact);
            //}
        },
        async editFavorite({ commit }, id) {
            commit('editFavorite', id);
        }
    }
};

export default contacts;