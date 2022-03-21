import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../shared/game-state.service";
import {CharacterState} from "../../shared/character-state";
import {MatchType} from "../../shared/match-type";
import {Clipboard} from '@angular/cdk/clipboard';
import {SnackbarControllerService} from "../../../snackbar/snackbar-controller.service";
import {ResultService} from "./result.service";
import {DictionaryService} from "../../shared/dictionary.service";

@Component({
  selector: 'app-endgame-popup',
  templateUrl: './endgame-popup.component.html',
  styleUrls: ['./endgame-popup.component.scss']
})
export class EndgamePopupComponent implements OnInit {

  constructor(
      public game: GameStateService,
      private clipboard: Clipboard,
      private snackbar: SnackbarControllerService,
      public result: ResultService
  ) { }

  public solution: CharacterState[] = [];
  public dictLink: string = '#';

  ngOnInit(): void {
    this.dictLink = `https:/sjp.pl/${this.game.solution.toLowerCase()}` ;
    this.prepareSolutionTiles();
  }

  private prepareSolutionTiles() {
    this.game.solution.split('').map((value: string) => {
      this.solution.push({character: value, matchType: MatchType.Match});
    })
  }

  public onClick() {
    this.snackbar.show('Skopiowano do schowka');
  }
}
