import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Game } from './../models/game';
import { GamePlayersComponent } from '../game-players/game-players.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Firestore, collection, collectionData,addDoc,docData,doc, updateDoc, } from '@angular/fire/firestore';



import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { GameInformationComponent } from '../game-information/game-information.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule,GamePlayersComponent,MatButtonModule, MatIconModule, GameInformationComponent],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  game = new Game();
  paramsId:string ='';
  games$;
  games;
  constructor(private route: ActivatedRoute,public dialog: MatDialog) {
    
    this.route.params.subscribe((params: any) => {
      this.paramsId = params.id;
    });

    this.games$ = docData(this. getSingleGameRef(this.paramsId));
    this.games = this.games$.subscribe((gameList:any) => {
      console.log(gameList);
    this.game.currentPlayer = gameList.currentPlayer;
    this.game.playedCard = gameList.playedCard;
    this.game.players = gameList.players;
    this.game.stack = gameList.stack;
    this.game.pickCardAnimation = gameList.pickCardAnimation;
    this.game.currentCard = gameList.currentCard

    });
  }




  ngOnInit():void {
    this.newGame();
 
  }


  getSingleGameRef(docId: string){
    return doc(collection(this.firestore, 'games'), docId);
    
  }

  newGame() {
    this.game;

  }


  clickCard() {
    if(!this.game.pickCardAnimation){
      let popCard = this.game.stack.pop();

      if(popCard != undefined) {
        this.game.currentCard = popCard;
        this.game.pickCardAnimation = true;
      

        this.game.currentPlayer++;
        this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
        this.saveGame();
        setTimeout(() => {
          this.game.playedCard.push(this.game.currentCard);
          this.game.pickCardAnimation = false;
          this.saveGame();
        },1000)
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((inputName:string) => {
      if (inputName && inputName.length >0) {
        this.game.players.push(inputName);
        this.saveGame();
      }
    });
  }
  saveGame(){
    updateDoc(this.getSingleGameRef(this.paramsId), this.game.toJason());
  }

}
