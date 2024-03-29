import Vuex from 'vuex';
import contacts from '@/store/contacts';

const store = new Vuex.Store({ modules: { contacts } });

export default store;
