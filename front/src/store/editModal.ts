import { IState } from '@/types/state';
import { IContact } from '@/types/contact';
import { Commit } from 'vuex';

const editModal = {
    namespace: true,
    state: () => ({
        isEditModalOpen: false,
        selectedItemForEdit: {}
    }),
    getters: {
        isEditModalOpen: (state: IState) => state.isEditModalOpen,
        selectedItemForEdit: (state: IState) => state.selectedItemForEdit
    },
    mutations: {
        switchEditModal(state: IState, value: boolean) {
            console.log(value);
            state.isEditModalOpen = value;
        },
        selectItemForEditModal(state: IState, value: IContact) {
            console.log(value);
            state.selectedItemForEdit = value;
        }
    },
    actions: {
        openEditModal({ commit }: { commit: Commit }, item: IContact) {
            commit('selectItemForEditModal', item);
            commit('switchEditModal', true);
        },
        closeEditModal({ commit }: { commit: Commit }) {
            commit('selectItemForEditModal', {});
            commit('switchEditModal', false);
        }
    }
};
export default editModal;
