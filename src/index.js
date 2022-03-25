const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  // Write your code here.\
  // loop through all the competitions and update the winner
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    // if the winner is already in the hash table, add 3 points
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}
