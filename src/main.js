import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from '@/App.vue';
import { i18n } from '@/i18n.js';
import { router } from '@/router.js';
import { store } from '@/store';

library.add(fas);

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
