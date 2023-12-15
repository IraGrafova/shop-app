import Vue from "vue";
import App from "./App.vue";

import data from "./data";
import { message, messageTwo } from "./constans";
import alertMessage from "./utils";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  methods: {
    alertMessages() {
      alertMessage(message);
      alertMessage(messageTwo);
    },
  },
  mounted() {
    this.alertMessages()
  },
}).$mount("#app");
