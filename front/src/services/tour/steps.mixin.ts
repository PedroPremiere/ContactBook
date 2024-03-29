// eslint-disable-next-line no-unused-vars
export function steps(translate: (_: string) => string) {
    return [
        {
            target: '#v-step-0',
            header: {
                title: translate('tour.step0.header')
            },
            content: translate('tour.step0.content')
        },
        {
            target: '.v-step-1',
            header: {
                title: translate('tour.step1.header')
            },
            content: translate('tour.step1.content')
        },
        {
            target: '[data-v-step="2"]',
            header: {
                title: translate('tour.step2.header')
            },
            content: translate('tour.step2.content'),
            params: {
                placement: 'top'
            }
        },
        {
            target: '[data-v-step="4"]',
            content: translate('tour.step3.content'),
            params: {
                placement: 'top'
            }
        },
        {
            target: '[data-v-step="5"]',
            content: translate('tour.step4.content'),
            params: {
                placement: 'top'
            }
        },
        {
            target: '[data-v-step="favoriteOnly"]',
            content: translate('tour.step5.content'),
            params: {
                placement: 'top'
            }
        },
        {
            target: '[data-v-step="allContacts"]',
            content: translate('tour.step6.content'),
            params: {
                placement: 'top'
            }
        }
    ];
}
