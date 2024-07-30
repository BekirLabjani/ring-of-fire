import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { Game } from './../models/game';
import { GamePlayersComponent } from '../game-players/game-players.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';
import { GameInformationComponent } from '../game-information/game-information.component';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule,GamePlayersComponent,MatButtonModule, MatIconModule, GameInformationComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent implements OnInit {

  pickCardAnimation = false;
  
  currentCard:string = '';
  game = new Game();


  constructor(public dialog: MatDialog){

  }


  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game;
  }


  clickCard() {
    if(!this.pickCardAnimation){
      let popCard = this.game.stack.pop();
      if(popCard != undefined) {
        this.currentCard = popCard;
        this.pickCardAnimation = true;
 

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        setTimeout(() => {
          this.game.playedCard.push(this.currentCard);
          this.pickCardAnimation = false;
        },1000)
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((inputName:string) => {
      if (inputName && inputName.length >0) {
        this.game.players.push(inputName);
      }
    });
  }
}
