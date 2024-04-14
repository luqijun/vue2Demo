<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <react-demo :message="message" @onMyEvent="parentClickHandle"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import reactDemo from './components/react/ReactDemo.jsx'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'react-demo': reactDemo
  },
  data () {
    return {
      message: 'Hello Demo from React!'
    }
  },
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
