import { createPinia } from 'pinia';
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount('#app');
