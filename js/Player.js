class Player {
  constructor() {
    this.name = null;
    this.index = null;//index is order of the player
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if(this.index === 1){
       this.positionX = width/2-100;
    }
    else{
      this.positionX = width/2+100;
    }

    database.ref(playerIndex).set({
      name : this.name,
      positionX : this.positionX,
      positionY : this.positionY,
    })
  }
 

  //Bp
  getCount(){
    database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
    })
  }
    //Bp
 updateCount(Count){
   database.ref("/").update({
      playerCount : Count
   })

 }

 

  //Bp
 static getPlayerInfo(){
    database.ref("players").on("value",(data)=>{
        allPlayers = data.val();
    })
 }
}
