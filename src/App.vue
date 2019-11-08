<template>
  <div id="app">
    <h1>Comfort Ui</h1>
    <cf-button @click="handleClick">舒适按钮</cf-button>
  </div>
</template>

<script>
import CfButton from './packages/button/src/button'

export default {
  name: 'App',
  components:{
    CfButton
  },
  methods:{
    handleClick() {
      alert("这是第一个按钮")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
