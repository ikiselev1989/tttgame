export default class Gameboard {
  constructor() {
    this.enable = true;
    this.board = ["", "", "", "", "", "", "", "", ""];

    this.winnerMask = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    this.winner = null;
    this.gameStarting = false;

    this.turnCounter = 0;
  }

  enableSwitch() {
    this.gameStarting = true;
    return (this.enable = !this.enable);
  }

  checkProgress() {
    this.turnCounter++;

    if (this.turnCounter === 9) {
      this.winner = "nooneWin";
    } else {
      let interimProgress = this.winnerMask.map(currentLine => {
        return currentLine
          .map(cell => {
            return this.board[cell];
          })
          .join("");
      });

      interimProgress.forEach(line => {
        let playerReg = /player/g;
        let playerMatch = line.match(playerReg);
        playerMatch =
          playerMatch && playerMatch.length ? playerMatch.length : 0;

        let aiReg = /ai/g;
        let aiMatch = line.match(aiReg);
        aiMatch = aiMatch && aiMatch.length ? aiMatch.length : 0;

        if (playerMatch === 3) {
          this.winner = "playerWin";
        }

        if (aiMatch === 3) {
          this.winner = "aiWin";
        }
      });
    }

    if (!this.winner) {
      this.enableSwitch();
    }
  }

  setCellProperty(property, index) {
    this.board.splice(index, 1, property);
    this.checkProgress();
  }

  setPlayerProperty(index) {
    this.setCellProperty("player", index);
    this.calculateAITurn();
  }

  calculateAITurn() {
    let topPriorityCells = [];
    let anotherCells = [];

    this.winnerMask.forEach(boardLine => {
      let playerMarkCounter = 0;
      let aiMarkCounter = 0;
      let opportunityCell;

      boardLine.forEach(cellIndex => {
        switch (this.board[cellIndex]) {
          case "player":
            return playerMarkCounter++;

          case "ai":
            return aiMarkCounter++;

          default:
            opportunityCell = cellIndex;
        }
      });

      if (opportunityCell >= 0) {
        switch (aiMarkCounter) {
          case 2:
            return topPriorityCells.unshift(opportunityCell);

          case 1:
            return anotherCells.unshift(opportunityCell);
        }

        if (playerMarkCounter === 2) {
          return topPriorityCells.push(opportunityCell);
        }

        return anotherCells.push(opportunityCell);
      }
    });

    if (topPriorityCells.length) {
      this.setCellProperty("ai", topPriorityCells.shift());
    } else {
      anotherCells.length
        ? this.setCellProperty("ai", anotherCells.shift())
        : "";
    }
  }
}
