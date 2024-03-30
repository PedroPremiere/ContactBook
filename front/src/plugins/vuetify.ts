import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#FAC1CE',
                    secondary: '#FD9282',
                    success: '#9CE5CB',
                    info: '#FFDDD0',
                    warning: '#FEE3AF'
                }
            }
        }
    }
});

export default vuetify;
