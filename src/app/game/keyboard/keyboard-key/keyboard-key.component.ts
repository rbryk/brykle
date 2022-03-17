import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameStateService} from "../../../game-state.service";

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {

  @Input() key: string = '';

  @Output() keyClicked: EventEmitter<string> =
      new EventEmitter<string>();


  constructor(public game: GameStateService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.game.matchCharacters);
    this.keyClicked.emit(this.key);
  }

}
