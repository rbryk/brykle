import {Injectable} from '@angular/core';
import {GameStateService} from "../../shared/game-state.service";
import {MatchType} from "../../shared/match-type";
import {DictionaryService} from "../../shared/dictionary.service";

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    constructor(
        public game: GameStateService,
        private dictionary: DictionaryService
    ) {
    }

    public share(): string {
        const brykleDate = this.game.startDate.toLocaleString('default', {day: 'numeric', month: 'long'});
        const brykleTime = this.game.startDate.toLocaleString('default', {hour: 'numeric'}) + ':00';
        const board = this.getBoardAsAscii();
        let result: string = '';
        if (this.game.youWin()) {
            result +=
                'Rozwiązałem #brykle z dnia ' +
                brykleDate +
                ' godz ' +
                brykleTime +
                ' po ' +
                this.dictionary.attemptDeclination(this.game.currentGuessNumber - 1) +
                ' ' +
                this.dictionary.hintCountDeclination(this.game.hintUsed) +
                "\n";
        } else {
            result += 'Poległem w #brykle z dnia ' + brykleDate + ' godz ' + brykleTime + '. Może Tobie pójdzie lepiej.' + "\n";
        }
        result += board;
        result += 'Graj na http://rafalbryk.pl';
        return result;
    }

    private getBoardAsAscii() {
        let result: string = '';
        this.game.guesses.forEach(((row) => {
            row.forEach((value) => {
                result += this.matchTypeAsAscii(value.matchType)
            })
            result += '\n'
        }))
        return result;
    }

    private matchTypeAsAscii(type: MatchType): string {
        switch (type) {
            case MatchType.Match: {
                return "🟦";
            }
            case MatchType.Partial: {
                return "🟧";
            }
            case MatchType.Miss: {
                return "⬛"
            }
        }
        return '?';
    }

}
