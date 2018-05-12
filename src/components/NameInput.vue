<template>
    <div class="name-input">
        <button type="submit" class="name-input--button" @click.prevent="submitName">
            Start Game
        </button>
    </div>
</template>

<script>
export default {
  store: ["sounds"],
  methods: {
    submitName() {
      this.sounds.playClick();
      this.$router.push("/game");
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../assets/less/variable";

.name-input {
  margin-top: 4em;
  display: flex;
  justify-content: center;

  &--button {
    padding: 0.2em 0.5em;
    font-size: 1.5em;
    color: @white;
    background-color: @palegoldenrode;
    border: none;
    border-radius: 4px;
    outline: none;
    transition: color 200ms, background-color 200ms;
    cursor: pointer;

    &:active,
    &:hover {
      background-color: @darkseagreen;
    }

    &:active {
      transform: translate(1px, 1px);
    }
  }
}
</style>
