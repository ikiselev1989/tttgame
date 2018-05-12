import { Howl } from "howler";
import click from "../../assets/sound/click.mp3";
import music from "../../assets/sound/music.mp3";

export default class Sound {
  constructor() {
    this.fx = true;
    this.music = true;

    this.clickSound = new Howl({
      src: [click]
    });

    this.musicSound = new Howl({
      src: [music],
      loop: true
    });

    this.switchMusicState();
  }

  playClick() {
    if (this.fx) {
      this.clickSound.play();
    }
  }

  switchMusicState() {
    if (this.music) {
      this.musicSound.play();
    } else {
      this.musicSound.stop();
    }
  }
}
