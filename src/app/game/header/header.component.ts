import {Component, OnInit} from '@angular/core';
import {GameStateService} from "../shared/game-state.service";
import {SnackbarControllerService} from "../../snackbar/snackbar-controller.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public showHelp: boolean = false;

    private REFRESHED_MSG: string = "Wyczyszczono stan gry";

    constructor(private game: GameStateService, private snackbar: SnackbarControllerService) {
    }

    ngOnInit(): void {
    }

    clickHelp() {
        this.showHelp = true;
    }

    clickRestart() {
        if (!this.game.isOver()) {
            this.game.clear();
            this.snackbar.show(this.REFRESHED_MSG);
        }
    }

    onXClicked() {
        this.showHelp = false;
    }
}
