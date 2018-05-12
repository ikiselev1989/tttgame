<template>
  <div class="gameboard-cell" v-html="propertyHTML"
       :class="propertyClass"
       @click="setPlayerProperty">
  </div>
</template>

<script>
export default {
  store: ["gameboard", "sounds"],
  props: ["property", "index"],
  computed: {
    propertyClass() {
      return this.property
        ? `gameboard-cell__${this.property}`
        : this.gameboard.enable
          ? "gameboard-cell__enable"
          : "";
    },
    propertyHTML() {
      switch (this.property) {
        case "player":
          return '<i class="fas fa-times fa-4x"></i>';
        case "ai":
          return '<i class="fas fa-circle fa-4x"></i>';
        default:
          return "";
      }
    }
  },
  methods: {
    setPlayerProperty() {
      if (!this.property && this.gameboard.enable) {
        this.sounds.playClick();
        this.gameboard.setPlayerProperty(this.index);
      }
    }
  }
};
</script>

<style lang="less">
@import (reference) "../assets/less/variable";

.gameboard-cell {
  width: 6.8em;
  height: 6.8em;
  margin: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: @linen;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 250ms;

  &__player {
    background-color: @darkseagreen;
  }

  &__ai {
    background-color: @salmon;
  }

  &__enable {
    cursor: pointer;
  }
}
</style>
