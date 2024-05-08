import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vue 인스턴스를 생성하는 대신 createApp 함수를 사용하여 Vue 3에서는 Vue 인스턴스를 생성합니다.
createApp(App)
  .use(router) // Vue Router를 사용합니다.
  .mount('#app'); // Vue 인스턴스를 #app 요소에 마운트합니다.

  