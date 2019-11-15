<template>
  <div id="app">
    <!-- website header -->
    <div class="header">
      <div class="logo">Comfort-UI</div>
      <div class="tabs">
        <router-link to="">文档</router-link>
        <router-link to="">示例</router-link>
      </div>
    </div>
    <div class="web-view">
      <nav-slide></nav-slide>
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
    
    
  </div>
</template>

<script>
import NavSlide from './components/nav.vue'
export default {
  name: 'App',
  components:{
    NavSlide
  },
  methods:{
    handleClick() {
      alert("这是第一个按钮")
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../src/styles/index.styl"

#app {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.web-view{
  height: 100%;
  box-sizing: border-box;
  background: #eee;
  padding-top:60px;
  display:flex;
  justify-content:space-between;
}
.header {
  display:flex;
  padding:0 30px;
  justify-content:space-between;
  color:#FFF;
  height:60px;
  line-height: 60px;
  width:100%;
  background-color:#333;
  position:fixed;
  top:0;
  left:0;
  right:0;
  a{ color:#FFF;}
  .logo {
    font-size:22px;
  }
}

.container{
  width:82%;
  box-sizing: border-box;
  padding:30px 50px;
}
</style>>

