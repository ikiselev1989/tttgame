<template>
  <div class="gameboard">
    <gameboard-cell v-for="(cell, key) in  gameboard"
                    :key="key" :property="cell" :index="key"></gameboard-cell>
  </div>
</template>

<style lang="less">
@import (reference) "../assets/less/variable";

.gameboard {
  width: 21em;
  height: 21em;
  margin: 2em auto 0;
  display: flex;
  flex-wrap: wrap;
}
</style>

<script>
import GameboardCell from "./GameboardCell.vue";

export default {
  store: {
    gameboard: "gameboard.board",
    winner: "gameboard.winner"
  },
  components: {
    GameboardCell
  },
  watch: {
    winner() {
      this.$router.push("/gameover");
    }
  }
};
</script>
