import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../shared/game-state.service";

@Component({
    selector: 'app-game-board',
    templateUrl: './game-board.component.html',
    styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

    constructor(public game: GameStateService) {
    }

    ngOnInit(): void {
    }

}
