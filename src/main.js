import { createApp } from "vue";
import App from "./App.vue";
import Stars from "./components/Stars.vue"
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const starsEffect = createApp(Stars);

app.use(router);

starsEffect.mount(".stars");
app.mount("#app");
