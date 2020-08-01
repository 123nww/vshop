<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="maintabbar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar.vue";

// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener("touchstart", function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function (event) {
    event.preventDefault();
  });
  document.addEventListener("touchmove", function (event) {
    event.passive = false;
  });
};

export default {
  name: "App",
  components: {
    MainTabBar,
  }
};
</script>
<style>
@import "./assets/css/base.css";
</style>
