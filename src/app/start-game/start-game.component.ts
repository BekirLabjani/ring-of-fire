import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData,addDoc,docData,doc, } from '@angular/fire/firestore';
import { GamePageComponent } from '../game-page/game-page.component';
import { Game } from '../models/game';
@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [GamePageComponent],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {
  firestore: Firestore = inject(Firestore);
  constructor(private router: Router) {

  }

  startGame() {
    let game = new Game();
    let gameCollecton = collection(this.firestore, 'games');
    addDoc(this.getGameRef(), game.toJason()).then((gameInfo)=> {
      console.log(gameInfo);
      this.router.navigateByUrl('/game/' + gameInfo.id);
      
    })
  }

  getGameRef() {
    return collection(this.firestore, 'games');
  }

}


