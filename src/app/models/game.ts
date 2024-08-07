 export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer:number = 0;
    public pickCardAnimation = false;
    public currentCard:string = '';

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }

        shuffle(this.stack);
    }
     public toJason() {
        return {
             players: this.players, 
             stack : this.stack, 
             playedCard: this.playedCard, 
             currentPlayer: this.currentPlayer,
             pickCardAnimation : this.pickCardAnimation,
             currentCard : this.currentCard,
        }
     }
 }

 function shuffle(array:string[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}