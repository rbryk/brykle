import {Component, Input, OnInit} from '@angular/core';
import {CharacterState} from "../../../shared/character-state";
import {MatchType} from "../../../shared/match-type";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() character : CharacterState = new CharacterState('', MatchType.None);
  @Input() flatness: string = "normal";

  constructor() { }

  ngOnInit(): void {
  }

}
