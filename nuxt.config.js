// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: false,
  app: {
    head: {
      title: 'Nuxt3 Tests',
    },
  },
  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },
  modules: ['nuxt-primevue'],
  primevue: {
    options: { ripple: true },
    components: {
      include: '*',
    },
  },
  css: ['primevue/resources/themes/lara-light-green/theme.css'],
  runtimeConfig: {
    apiKey: 'AIzaSyCiV_5UiUHTk8FoVwrvvgQV-OnokffHIa8',
    authDomain: 'teste-b7e0e.firebaseapp.com',
    projectId: 'teste-b7e0e',
    storageBucket: 'teste-b7e0e.appspot.com',
    messagingSenderId: '322096531629',
    appId: '1:322096531629:web:a4ade9ae36ad9b0a9a1e24',
  },
});
