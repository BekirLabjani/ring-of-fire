import { Routes } from '@angular/router';
import { StartGameComponent } from './start-game/start-game.component';
import { GamePageComponent } from './game-page/game-page.component';

export const routes: Routes = [
    { path: '', component: StartGameComponent },
    { path: 'game', component: GamePageComponent },
];
