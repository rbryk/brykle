import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameState} from "../../../game-state";

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {

  @Input() game: GameState = new GameState('');
  @Input() key: string = '';

  @Output() keyClicked: EventEmitter<string> =
      new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log(this.game.matchCharacters);
    this.keyClicked.emit(this.key);
  }

}
