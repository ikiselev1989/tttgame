export default class Informer {
  constructor() {
    this.title = "";
    this.subtitle = "";
    this.templates = {
      default: {
        title: "Welcome to TIC-TAC-TOE Game!",
        subtitle: "Please enter your name."
      },
      startGame: {
        title: "Make click to start Game.",
        subtitle: ""
      },
      gameProgress: {
        title: "Game in progress...",
        subtitle: ""
      },
      playerWin: {
        title: "Congratulation! You're win!",
        subtitle: "Do you wanna restart the game?"
      },
      aiWin: {
        title: "Don't worry!",
        subtitle: "Do you wanna restart the game?"
      },
      nooneWin: {
        title: "Friendship win!",
        subtitle: "Do you wanna restart the game?"
      }
    };

    this.setTemplates("default");
  }

  setTemplates(templatesName) {
    let needTemplate;

    if ((needTemplate = this.templates[templatesName])) {
      let { title, subtitle } = needTemplate;

      this.title = title;
      this.subtitle = subtitle;
    }
  }
}
