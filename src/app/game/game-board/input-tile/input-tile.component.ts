import {Component, Input, OnInit} from '@angular/core';
import {GameStateService} from "../../../game-state.service";
import {CharacterState} from "../../../character-state";
import {MatchType} from "../../../match-type";

@Component({
  selector: 'app-input-tile',
  templateUrl: './input-tile.component.html',
  styleUrls: ['./input-tile.component.scss']
})
export class InputTileComponent implements OnInit {

  @Input() character : string = '';
  @Input() number : number = -1;

  constructor(public game: GameStateService) { }

  ngOnInit(): void {
  }

}
