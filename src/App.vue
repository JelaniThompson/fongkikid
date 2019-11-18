<template>
  <div id="app">
    <!-- <Homepage /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Homepage from "./components/Homepage.vue";

export default {
  name: "app"
  // components: {
  //   Homepage
  // }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
html,
body {
  margin: 0;
  overflow-y: hidden;
  // padding: 0;
}
</style>
