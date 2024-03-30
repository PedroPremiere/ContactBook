import { IState } from '@/types/state';
import { IContact } from '@/types/contact';
import { Commit } from 'vuex';

const deleteModal = {
    namespace: true,
    state: () => ({
        isDeleteModalOpen: false,
        selectedItemForDelete: {}
    }),
    getters: {
        isDeleteModalOpen: (state: IState) => state.isDeleteModalOpen,
        selectedItemForDelete: (state: IState) => state.selectedItemForDelete
    },
    mutations: {
        switchDeleteModal(state: IState, value: boolean) {
            state.isDeleteModalOpen = value;
        },
        selectItemForDeleteModal(state: IState, value: IContact) {
            state.selectedItemForDelete = value;
        }
    },
    actions: {
        openDeleteModal({ commit }: { commit: Commit }, item: IContact) {
            commit('selectItemForDeleteModal', item);
            commit('switchDeleteModal', true);
        },
        closeDeleteModal({ commit }: { commit: Commit }) {
            commit('selectItemForDeleteModal', {});
            commit('switchDeleteModal', false);
        }
    }
};
export default deleteModal;
