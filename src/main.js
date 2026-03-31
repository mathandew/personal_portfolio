import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.scss";

// Initialize AOS
import AOS from "aos";
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

createApp(App).use(router).use(store).mount("#app");
