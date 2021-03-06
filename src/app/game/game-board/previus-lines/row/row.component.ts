import {Component, Input, OnInit} from '@angular/core';
import {CharacterState} from "../../../shared/character-state";

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

    @Input() public guess: CharacterState[] = [];
    @Input() public flatness: string = 'normal';

    constructor() {
    }

    ngOnInit(): void {
    }

}
