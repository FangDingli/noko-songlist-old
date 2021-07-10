import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";

import "./assets/css/setting.css"
import "./assets/css/global.css"

const app = createApp(App);

app.use(store); 

app.mount('#app')

export default app;