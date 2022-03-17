import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameState} from "../../game-state";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Input() public game : GameState = new GameState('');

  constructor() { }

  @Output() keyClicked: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnInit(): void {
  }

  onKeyClicked($event: string) {
    console.log($event);
    this.keyClicked.emit($event);
  }
}
