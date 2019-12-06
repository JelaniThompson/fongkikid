<template>
  <div id="app">
    <!-- <Homepage /> -->
    <!-- <imageCompressor :done="getFiles" :scale="scale" :quality="quality"> -->
    <!-- </imageCompressor> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Homepage from "./components/Homepage.vue";
// import imageCompressor from "vue-image-compressor";

export default {
  name: "app"
  // components: {
  //   // imageCompressor
  // }
};
</script>

<style lang="less">
@font-face {
  font-family: "Helvetica Neue Bold";
  src: url("./assets/fonts/HelveticaNeue.ttf");
}
@font-face {
  font-family: "Helvetica Neue Bold";
  src: url("./assets/fonts/Helvetica Neu Bold.ttf");
}
#app {
  font-family: "Helvetica Neue Bold", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  // padding: 0;
}
</style>
