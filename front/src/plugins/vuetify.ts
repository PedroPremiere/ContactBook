import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import colors from 'vuetify/util/colors';

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.indigo.lighten3, // #E53935
                    secondary: colors.red.lighten4 // #FFCDD2
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.indigo.lighten3, // #E53935
                    secondary: colors.red.lighten4 // #FFCDD2
                }
            }
        }
    }
});

export default vuetify;
