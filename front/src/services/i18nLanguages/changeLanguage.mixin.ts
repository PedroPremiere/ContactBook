import dayjs from 'dayjs';

export const changeLanguage = (i18nLocale: string) => {
    //dayjs.locale(this.$i18n.locale);
    dayjs.locale(i18nLocale);
    localStorage.Lang = i18nLocale;
};
