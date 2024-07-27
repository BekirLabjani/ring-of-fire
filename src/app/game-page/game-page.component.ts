import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent implements OnInit {

  pickCardAnimation = false;
  currentCard:string = '';
  game = new Game();


  constructor(){
    console.log(this.pickCardAnimation);

  }


  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game;
    console.log(this.game);
  }

  clickCard() {
    if(!this.pickCardAnimation){
      let popCard = this.game.stack.pop();
      if(popCard != undefined) {
        this.currentCard = popCard;
        this.pickCardAnimation = true;
        console.log(this.game.playedCard);
        console.log(this.currentCard);
        setTimeout(() => {
          this.game.playedCard.push(this.currentCard);
          this.pickCardAnimation = false;
        },1500)
      }
    }
  }
}
