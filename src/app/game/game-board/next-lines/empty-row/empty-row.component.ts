import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../../../shared/game-state.service";

@Component({
    selector: 'app-empty-row',
    templateUrl: './empty-row.component.html',
    styleUrls: ['./empty-row.component.scss']
})
export class EmptyRowComponent implements OnInit {

    constructor(public game: GameStateService) {
    }

    ngOnInit(): void {
    }

}
