import * as path from 'path';

/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */
const config = {
    stories: [
        '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../src/components/**/*.mdx',
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        'storybook-addon-vuetify3'
    ],
    framework: {
        name: '@storybook/vue3-webpack5',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, '../src/components')
        };

        return config;
    }
};
export default config;
