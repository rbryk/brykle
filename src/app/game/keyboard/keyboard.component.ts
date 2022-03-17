import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameStateService} from "../../game-state.service";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor(public game: GameStateService) { }

  @Output() keyClicked: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnInit(): void {
  }

  onKeyClicked($event: string) {
    console.log($event);
    this.keyClicked.emit($event);
  }
}
