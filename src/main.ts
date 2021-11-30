// @ts-ignore
import { useRegisterSW } from 'virtual:pwa-register/vue'
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from '@/App.vue';
import { i18n } from '@/i18n';
import { router } from '@/router';
import { store } from '@/store';

library.add(fas);

const intervalMS = 60 * 60 * 1000; // each hour

const updateServiceWorker = useRegisterSW({
  onRegistered(r: ServiceWorkerRegistration|undefined) {
    r && setInterval(() => {
      r.update()
    }, intervalMS)
  }
});

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
