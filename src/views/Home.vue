<template>
  <div class="content-wrapper">
    <informer />
    <name-input />
  </div>
</template>

<script>
import NameInput from "../components/NameInput.vue";
import Informer from "../components/Informer.vue";

export default {
  name: "home",
  components: {
    Informer,
    NameInput
  },
  beforeCreate() {
    this.$store.startNewGame();
  }
};
</script>
