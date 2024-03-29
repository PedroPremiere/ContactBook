module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended'
        //'plugin:prettier/recommended'
        //'eslint-config-prettier'
    ],
    //parser: 'vue-eslint-parser',
    parser: 'vue-eslint-parser',
    rules: {
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
        ],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/max-attributes-per-line': ['off'],
        'vue/html-self-closing': ['off'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off'
    },
    parserOptions: {
        sourceType: 'script',
        ecmaFeatures: {
            jsx: true
        },
        parser: '@typescript-eslint/parser'
    },
    overrides: [
        {
            files: ['src/**/*'],
            parserOptions: {
                sourceType: 'module'
            },
            env: {
                browser: true
            }
        }
    ],
    globals: {
        $: true,
        require: true,
        process: true,
        module: true,
        $tours: true
    }
};
