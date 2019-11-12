<template>
  <div id="app">
    <div class="web-view">

    </div>
    <!-- website header -->
    <div class="header">
      <div class="logo">Comfort-UI</div>
      <div class="tabs">
        <router-link to="">文档</router-link>
        <router-link to="">示例</router-link>
      </div>
    </div>
    <div class="nav-list">
      <nav>
        <ul>
          <li>指南</li>
          <li>组件</li>
          <li><router-link to="/button">按钮</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CfButton from '../packages/button/src/button'

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
  background: red;
  padding-top:60px;
}
.header {
  display:flex;
  height:60px;
  width:100%;
  background-color:#ccc;
  position:fixed;
  top:0;
  left:0;
  right:0;
  .logo {
    font-size:22px;
  }
}
</style>>

