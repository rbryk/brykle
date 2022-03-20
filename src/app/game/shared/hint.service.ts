import {Injectable} from '@angular/core';
import {GameStateService} from "./game-state.service";
import {DictionaryService} from "./dictionary.service";

@Injectable({
    providedIn: 'root'
})
export class HintService {

    constructor(public game: GameStateService, public dictionary: DictionaryService) {
    }

    public getRandomHint(): string {
        let hints = this.getHints();
        let num = this.randomInt(hints.length);
        return hints[num];
    }

    private getHints(): string[] {
        let hints: string[] = [];

        if (this.dictionary.isVowel(this.game.solution.charAt(0))) {
            hints.push('Rozwiązanie zaczyna się od samogłoski');
        } else {
            hints.push('Rozwiązanie zaczyna się od spółgłoski');
        }

        if (this.dictionary.anyCharactersRepeated(this.game.solution)) {
            hints.push("W rozwiązaniu niektóre litery występują wielokrotnie");
        }

        hints.push("Pomyśl, znasz to słowo :-)");

        return hints;
    }

    private randomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

}
