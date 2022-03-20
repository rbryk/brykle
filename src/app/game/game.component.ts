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

    constructor(
        public game: GameStateService,
        private dictionay: DictionaryService,
        private snackbar: SnackbarControllerService) {
    }

    ngOnInit(): void {
    }

    onKeyClicked($event: string) {
        if ($event == 'OK') {
            if (this.game.isGuessFilled()) {
                if (this.dictionay.isGuessValid(this.game.getCurrentGuess())) {
                    this.game.applyCurrentGuess()
                } else {
                    this.snackbar.show('To nie jest poprawne słowo');
                }
            }
            return;
        }
        if ($event == '<<') {
            this.game.removeCharacterFromGuess();
            return;
        }
        this.game.addCharacterToGuess($event);
    }
}
