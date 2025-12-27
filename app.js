const team = {
   _players:[],
   _games:[],
   get players(){
    return this._players;
   },
   get games(){
    return this._games;
   },
   addPlayer(firstName,lastName,age){
    const player = {
      firstName,
      lastName,
      age

    }
    this._players.push(player)
   },
   addGame(opponent,teamPoints,opponentPoints){
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game)

   }
   
}
team.addPlayer('ab','le',20);
console.log(team._players);
team.addGame('rival','10','5')
console.log(team._games);
console.log('final point');






