import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-game',
  standalone: true,
  imports: [],
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss'
})
export class StartGameComponent {

  constructor(private router: Router) {

  }
  startGame() {
    this.router.navigate(['/game']);
  }

}
