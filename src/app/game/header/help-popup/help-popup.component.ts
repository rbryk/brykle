import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CharacterState} from "../../shared/character-state";
import {MatchType} from "../../shared/match-type";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.scss', '../../endgame/endgame-popup/endgame-popup.component.scss'],
  animations: [
    trigger('helpPopupAnimationTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ])
    ]),
  ]
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
