import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CharacterState} from "../../shared/character-state";
import {MatchType} from "../../shared/match-type";

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.scss', '../../endgame/endgame-popup/endgame-popup.component.scss']
})
export class HelpPopupComponent implements OnInit {

  public worek: CharacterState[];
  public rolka: CharacterState[];

  @Output() xClicked: EventEmitter<string> =
      new EventEmitter<string>();


  constructor() {
    this.worek = [
      {character: 'W', matchType: MatchType.Miss},
      {character: 'O', matchType: MatchType.Match},
      {character: 'R', matchType: MatchType.Partial},
      {character: 'E', matchType: MatchType.Miss},
      {character: 'K', matchType: MatchType.Partial},
    ];
    this.rolka = [
      {character: 'R', matchType: MatchType.Match},
      {character: 'O', matchType: MatchType.Match},
      {character: 'L', matchType: MatchType.Match},
      {character: 'K', matchType: MatchType.Match},
      {character: 'A', matchType: MatchType.Match},
    ];
  }

  ngOnInit(): void {
  }

  closeHelp() {
    this.xClicked.emit('');
  }
}
