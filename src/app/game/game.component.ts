import {Component, OnInit} from '@angular/core';
import {GameStateService} from "./shared/game-state.service";
import {DictionaryService} from "./shared/dictionary.service";
import {SnackbarControllerService} from "../snackbar/snackbar-controller.service";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    private readonly INCORRECT_WORD_MSG = 'To nie jest poprawne słowo';

    public showEndgamePopup: boolean = true;

    constructor(
        public game: GameStateService,
        private dictionay: DictionaryService,
        private snackbar: SnackbarControllerService
    ) {
    }

    ngOnInit(): void {
    }

    onKeyClicked($event: string) {
        if ($event == 'OK') {
            if (this.game.isGuessFilled()) {
                if (this.dictionay.isGuessValid(this.game.getCurrentGuess())) {
                    this.game.applyCurrentGuess()
                    if (this.game.isOver()) {
                        this.displayEndGame();
                    }
                } else {
                    this.snackbar.show(this.INCORRECT_WORD_MSG);
                }
            }
            return;
        }
        if ($event == '<<') {
            this.game.removeCharacterFromGuess();
            return;
        }
        this.showEndgamePopup = false;
        this.game.addCharacterToGuess($event);
    }

    displayEndGame() {
        setTimeout(() => {
            this.showEndgamePopup = true;
        }, 1000);
    }

    onXClicked() {
        this.showEndgamePopup = false;
    }

}
