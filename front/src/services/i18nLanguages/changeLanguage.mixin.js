import dayjs from 'dayjs';

export const changeLanguage = {
    methods: {
        changeLanguage() {
            dayjs.locale(this.$i18n.locale);
            localStorage.Lang = this.$i18n.locale;
        }
    }
};
