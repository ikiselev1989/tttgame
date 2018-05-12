<template>
  <div id="app">
    <main-header />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "app",
  store: ["userid"],
  components: {
    MainHeader
  }
};
</script>

<style lang="less">
@import "./assets/less/reset";
@import "./assets/less/variable";

#app {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
