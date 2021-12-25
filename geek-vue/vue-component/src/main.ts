import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElContainer from "./components/container";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElContainer);

app.mount("#app");
