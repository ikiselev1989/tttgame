<template>
  <div class="content-wrapper">
    <informer />
    <gameboard />
  </div>
</template>

<script>
import Informer from "../components/Informer.vue";
import Gameboard from "../components/Gameboard.vue";

export default {
  name: "game",
  store: {
    gameStarting: "gameboard.gameStarting"
  },
  components: {
    Informer,
    Gameboard
  },
  beforeCreate() {
    this.$store.startNewGame();
    this.$store.informer.setTemplates("startGame");
  },
  watch: {
    gameStarting() {
      this.$store.informer.setTemplates("gameProgress");
    }
  }
};
</script>
