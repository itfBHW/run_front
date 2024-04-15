<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="handleClick">Click me</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

/*
f1 누르고 open user setting 검색 후 아래 코드 추가
그래야 1번 줄에 발생하는 애러 출력 안됨

"eslint.workingDirectories": [
    {
      "mode": "auto"
    }
  ]
*/