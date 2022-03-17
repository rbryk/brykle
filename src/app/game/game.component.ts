import { Component, OnInit } from '@angular/core';
import {GameState} from "../game-state";
import {GameStateService} from "../game-state.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: GameStateService) {}

  ngOnInit(): void {
    console.log('Game Init');
    this.game.addCharacterToGuess('k');
    this.game.addCharacterToGuess('a');
    this.game.addCharacterToGuess('p');
    this.game.addCharacterToGuess('e');
    this.game.addCharacterToGuess('ć');
    this.game.removeCharacterFromGuess();
    this.game.addCharacterToGuess('l');
    this.game.applyCurrentGuess();
    this.game.addCharacterToGuess('s');
    this.game.addCharacterToGuess('i');
    this.game.addCharacterToGuess('e');
    this.game.addCharacterToGuess('w');
    this.game.addCharacterToGuess('y');
    this.game.applyCurrentGuess();
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
