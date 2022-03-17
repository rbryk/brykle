import {Component, Input, OnInit} from '@angular/core';
import {GameStateService} from "../shared/game-state.service";
import {CharacterState} from "../shared/character-state";
import {MatchType} from "../shared/match-type";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  public caption: CharacterState = new CharacterState('HINT', MatchType.Partial);

  constructor(public game: GameStateService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._snackBar.open('To proste! Wystarczy trochę pomyśleć.', undefined, {
      duration: 5000,
    });
  }

}
