import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/styles/variables.sass';
import { preset } from 'vue-cli-plugin-vuetify-preset-fortnightly/preset'



Vue.use(Vuetify);

export default new Vuetify({
  preset,
});
