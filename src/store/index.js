import Options from "./component/options";
import Informer from "./component/informer";
import Gameboard from "./component/gameboard";
import Sound from "./component/sound";

import Vue from "vue";
import VueStash from "vue-stash";

Vue.use(VueStash);

export default class Store {
  constructor() {
    this.sounds = new Sound();
    this.options = new Options();
    this.informer = new Informer();
    this.gameboard = new Gameboard();
  }

  startNewGame() {
    this.informer = new Informer();
    this.gameboard = new Gameboard();
  }
}
