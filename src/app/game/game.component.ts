import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../game-state.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: GameStateService) {}

  ngOnInit(): void {
  }

  onKeyClicked($event: string) {
    if ($event == 'OK') {
      this.game.applyCurrentGuess()
      return;
    }
    if ($event == '<<') {
      this.game.removeCharacterFromGuess();
      return;
    }
    this.game.addCharacterToGuess($event);
  }
}
