import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-game-players',
  standalone: true,
  imports: [GamePlayersComponent],
  templateUrl: './game-players.component.html',
  styleUrl: './game-players.component.scss'
})
export class GamePlayersComponent implements OnInit{

  @Input() name:string = '';
  @Input() playerActive:boolean = false;


  constructor() {

  }

  ngOnInit(): void {
    
  }
}
