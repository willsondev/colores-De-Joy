import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Importa el router

// Crea la aplicación y registra el router
createApp(App)
  .use(router) // Usa el router en tu aplicación
  .mount('#app');
    