import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../shared/game-state.service";
import {CharacterState} from "../../shared/character-state";
import {MatchType} from "../../shared/match-type";

@Component({
  selector: 'app-endgame-popup',
  templateUrl: './endgame-popup.component.html',
  styleUrls: ['./endgame-popup.component.scss']
})
export class EndgamePopupComponent implements OnInit {

  constructor(public game: GameStateService) { }

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
}
