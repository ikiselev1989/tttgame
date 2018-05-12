<template>
  <div class="restart-modal">
    <button class="restart-modal--btn restart-modal--btn__accept" @click="acceptRestart">
      <i class="fas fa-check fa-3x"></i>
    </button>
    <button class="restart-modal--btn restart-modal--btn__refuse" @click="refuseRestart">
      <i class="fas fa-times fa-3x"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "restart-modal",
  store: ["sounds"],
  methods: {
    acceptRestart() {
      this.playClick();
      this.$router.push("/game");
    },

    refuseRestart() {
      this.playClick();
      this.$router.push("/");
    },
    playClick() {
      this.sounds.playClick();
    }
  }
};
</script>

<style lang="less">
@import (reference) "../assets/less/variable";

.restart-modal {
  margin-top: 4em;
  display: flex;
  justify-content: center;

  &--btn {
    width: 4em;
    height: 4em;
    color: @white;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;

    & + & {
      margin-left: 2em;
    }

    &__accept {
      background-color: @darkseagreen;
    }

    &__refuse {
      background-color: @salmon;
    }
  }
}
</style>
