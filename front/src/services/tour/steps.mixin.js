export const stepsMixin = {
    methods: {
        steps() {
            return [
                {
                    target: '#v-step-0',
                    header: {
                        title: this.$t('tour.step0.header')
                    },
                    content: this.$t('tour.step0.content')
                },
                {
                    target: '.v-step-1',
                    header: {
                        title: this.$t('tour.step1.header')
                    },
                    content: this.$t('tour.step1.content')
                },
                {
                    target: '[data-v-step="2"]',
                    header: {
                        title: this.$t('tour.step2.header')
                    },
                    content: this.$t('tour.step2.content'),
                    params: {
                        placement: 'top'
                    }
                },
                {
                    target: '[data-v-step="4"]',
                    content: this.$t('tour.step3.content'),
                    params: {
                        placement: 'top'
                    }
                },
                {
                    target: '[data-v-step="5"]',
                    content: this.$t('tour.step4.content'),
                    params: {
                        placement: 'top'
                    }
                },
                {
                    target: '[data-v-step="favoriteOnly"]',
                    content: this.$t('tour.step5.content'),
                    params: {
                        placement: 'top'
                    }
                },
                {
                    target: '[data-v-step="allContacts"]',
                    content: this.$t('tour.step6.content'),
                    params: {
                        placement: 'top'
                    }
                }
            ];
        }
    }
};
