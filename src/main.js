import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6dHnpaG649YHhM20joner9V09LOmYX9E",
  authDomain: "movie-night-61437.firebaseapp.com",
  projectId: "movie-night-61437",
  storageBucket: "movie-night-61437.appspot.com",
  messagingSenderId: "641092987375",
  appId: "1:641092987375:web:bd4c71b5656680479e2e1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
