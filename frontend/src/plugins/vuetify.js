import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        yellow:'#fdbf5a',
        grey:'#EEEEEE',
        white:'#FFFFFF'
      },
    },
  },
});
