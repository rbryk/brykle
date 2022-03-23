import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GameStateService} from "../shared/game-state.service";

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

    public keyboardKeys: string[][] = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
        ['Ą', 'Ę', 'Ś', 'Ć', 'Ń', 'Ó', 'Ł', 'Ź', 'Ż']
    ];

    constructor(public game: GameStateService) {
    }

    @Output() keyClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnInit(): void {
    }

    onKeyClicked($event: string) {
        this.keyClicked.emit($event);
    }
}
