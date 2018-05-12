<template>
  <div class="content-wrapper">
    <informer />
    <restart-modal />
  </div>
</template>

<script>
import Informer from "../components/Informer.vue";
import RestartModal from "../components/RestartModal.vue";

export default {
  name: "game-over",
  store: {
    winner: "gameboard.winner"
  },
  components: {
    Informer,
    RestartModal
  },
  mounted() {
    this.$store.informer.setTemplates(this.winner);
  }
};
</script>
