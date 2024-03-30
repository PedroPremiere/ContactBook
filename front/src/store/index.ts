import Vuex from 'vuex';
import contacts from '@/store/contacts';
import deleteModal from '@/store/deleteModal';
import editModal from '@/store/editModal';

const store = new Vuex.Store({ modules: { contacts, deleteModal, editModal } });

export default store;
