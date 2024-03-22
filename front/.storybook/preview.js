import { setup } from '@storybook/vue3'
import { withVuetifyTheme } from './withVuetifyTheme.decorator'

// Add Vuetify
import  vuetify  from '../src/plugins/vuetify'
function registerPlugins(app) {
  app.use(vuetify)
}

setup(app => {
  registerPlugins(app)
})

export const decorators = [withVuetifyTheme]

// Existing code...
const preview = {

}

export default preview
