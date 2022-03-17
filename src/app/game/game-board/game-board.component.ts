import {Component, Input, OnInit} from '@angular/core';
import {GameState} from "../../game-state";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  @Input() game : GameState = new GameState('');

  constructor() { }

  ngOnInit(): void {
  }

}
