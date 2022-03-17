import { Component, OnInit } from '@angular/core';
import {GameStateService} from "../../shared/game-state.service";

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html',
  styleUrls: ['./input-row.component.scss']
})
export class InputRowComponent implements OnInit {

  constructor(public game: GameStateService) { }

  ngOnInit(): void {
  }

}
