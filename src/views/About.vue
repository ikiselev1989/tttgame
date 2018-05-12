<template>
  <div class="content-wrapper">
    <div class="about-page">
      <div class="about-page--text">
        This project was created as part of the study
        <a class="about-page--link" href="https://github.com/vuejs/vue" target="_blank">Vue.js</a>, is a simple TIC TAC toe game.<br />
        The project has no complex AI, animation and only the simplest adaptive design, because it was not the goal of the project.<br />
        It also uses <a class="about-page--link" href="https://github.com/vuejs/vue-router" target="_blank">vue-router</a>
        for page routing, <a class="about-page--link" href="https://github.com/cklmercer/vue-stash" target="_blank">vue-stash</a>
        for application state management, and <a class="about-page--link" href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> for rapid project deployment. Work with audio is carried out by the <a class="about-page--link" href="https://github.com/goldfire/howler.js" target="_blank">howler.js</a>.
      </div>
      <ul class="about-page--link-list">
        <li>
          <i class="fab fa-github"></i>&nbsp;<a class="about-page--link" href="https://github.com/gonzoKiselev/tttgame" target="_blank">source code</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import (reference) "../assets/less/variable";

.about-page {
  &--text {
    margin-bottom: 2em;
    line-height: 1.5em;
  }

  &--link-list {
    line-height: 1.5;
  }

  &--link {
    color: @white;
    transition: color 200ms;

    &:hover {
      color: @darkseagreen;
    }
  }
}
</style>
