import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameStateService} from "../../shared/game-state.service";
import {CharacterState} from "../../shared/character-state";
import {MatchType} from "../../shared/match-type";
import {Clipboard} from '@angular/cdk/clipboard';
import {SnackbarControllerService} from "../../../snackbar/snackbar-controller.service";
import {ResultService} from "./result.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-endgame-popup',
  templateUrl: './endgame-popup.component.html',
  styleUrls: ['./endgame-popup.component.scss', '../../header/help-popup/help-popup.component.scss'],
  animations: [
    trigger('endgamePopupAnimationTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ])
    ]),
  ]

})
export class EndgamePopupComponent implements OnInit {

  @Output() xClicked: EventEmitter<string> =
      new EventEmitter<string>();

  constructor(
      public game: GameStateService,
      private clipboard: Clipboard,
      private snackbar: SnackbarControllerService,
      public result: ResultService
  ) { }

  public solution: CharacterState[] = [];
  public dictLink: string = '#';

  ngOnInit(): void {
    this.dictLink = `https://sjp.pl/${this.game.solution.toLowerCase()}` ;
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

  closeHelp() {
    this.xClicked.emit('');
  }

}
