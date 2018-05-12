<template>
    <div class="informer">
        <h1 class="informer--title">{{ title }}</h1>
        <h3 class="informer--subtitle">{{ subtitle }}</h3>
    </div>
</template>

<script>
export default {
  store: {
    title: "informer.title",
    subtitle: "informer.subtitle"
  }
};
</script>

<style lang="less" scoped>
.informer {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  &--title {
    font-size: 2.5em;
    font-weight: 600;
  }

  &--subtitle {
    margin-top: 1em;
    font-size: 1.5em;
  }
}
</style>
