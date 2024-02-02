// code your solution here
function superbowlWin(record) {
    const winningGame = record.find(game => game.result === 'W');
    return winningGame ? winningGame.year : undefined;
  }