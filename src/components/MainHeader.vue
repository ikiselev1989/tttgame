<template>
  <div class="header">
    <div class="header--part">
      <button class="header--button"
              :class="{ 'header--button__disable': !sounds.music }"
              @click="musicHandler">
        <i class="fas fa-music"></i>
      </button>
      <button class="header--button"
              :class="{ 'header--button__disable': !sounds.fx }"
              @click="fxHandler">FX
      </button>
    </div>
    <div class="header--part">
      <router-link @click.native="playClick" class="header--link"
                   exact-active-class="header--link__active" to="/about">About
      </router-link>
      <router-link @click.native="playClick"
                   v-if="this.$route.name !== 'home'" class="header--link"
                   exact-active-class="header--link__active" to="/">
        <i class="fas fa-sign-out-alt fa-2x"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  store: ["sounds"],
  methods: {
    musicHandler() {
      this.playClick();
      this.sounds.music = !this.sounds.music;
      this.sounds.switchMusicState();
    },
    fxHandler() {
      this.playClick();
      this.sounds.fx = !this.sounds.fx;
    },
    playClick() {
      this.sounds.playClick();
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/less/variable";

.header {
  height: 2.22em;
  padding: 0 2em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: @max-width-desktop;
  margin: 1em auto 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 10;

  &--part {
    display: flex;
    align-items: center;
  }

  &--button {
    width: 2em;
    height: 2em;
    color: @white;
    font-weight: 600;
    background-color: @darkseagreen;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: color 200ms, background-color 200ms;
    outline: none;

    &:active {
      transform: translate(1px, 1px);
    }

    & + & {
      margin-left: 1em;
    }

    &__disable {
      background-color: @linen;
      color: @black;
    }
  }

  &--link {
    margin-left: 3em;
    padding: 0.1em;
    color: @white;
    text-decoration: none;
    text-transform: lowercase;
    transition: color 200ms;

    &:hover {
      color: @darkseagreen;
    }

    &__active {
      color: @darkseagreen;
      text-decoration: underline;
    }
  }
}
</style>
