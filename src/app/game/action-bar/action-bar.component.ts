import {Component, NgZone, OnInit} from '@angular/core';
import {GameStateService} from "../shared/game-state.service";
import {CharacterState} from "../shared/character-state";
import {MatchType} from "../shared/match-type";
import {MatSnackBar, MatSnackBarHorizontalPosition} from "@angular/material/snack-bar";
import {SnackbarControllerService} from "../../snackbar/snackbar-controller.service";
import {HintService} from "../shared/hint.service";

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

    public caption: CharacterState = new CharacterState('HINT', MatchType.Partial);

    constructor(
        public game: GameStateService,
        private hintService: HintService,
        private snackbarController: SnackbarControllerService) {
    }

    ngOnInit(): void {
    }

    onClick(): void {
        this.snackbarController.show(this.hintService.getRandomHint());
    }
}
