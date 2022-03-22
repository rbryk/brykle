import {Injectable} from '@angular/core';
import {GameStateService} from "./game-state.service";
import {DictionaryService} from "./dictionary.service";

@Injectable({
    providedIn: 'root'
})
export class HintService {

    private readonly NO_MORE_HINTS = "Nie ma więcej podpowiedzi";

    private hints: string[];
    private currentHint: number;

    constructor(public game: GameStateService, public dictionary: DictionaryService) {
        this.hints = this.getHints().sort(() => Math.random() - 0.5);
        this.currentHint = 0;
    }

    public getRandomHint(): string {
        if (this.currentHint >= this.hints.length) {
            this.currentHint = 0;
            return this.NO_MORE_HINTS;
        } else {
            if (this.game.hintUsed < this.hints.length) {
                this.game.hintUsed++;
            }
            return this.hints[this.currentHint++];
        }
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
        } else {
            hints.push("W rozwiązaniu każda litera występują jednokrotnie");
        }

        if (this.dictionary.hasPolishCharacters(this.game.solution)) {
            hints.push("W rozwiązaniu występują polskie znaki diakrytyczne");
        } else {
            hints.push("W rozwiązaniu NIE występują polskie znaki diakrytyczne");
        }

        let vowelCount = this.dictionary.countVowels(this.game.solution);
        switch (vowelCount) {
            case 0: {
                hints.push("W rozwiązaniu nie występują samogłoski");
                break;
            }
            case 1: {
                hints.push("W rozwiązaniu występuje 1 samogłoska");
                break;
            }
            default: {
                hints.push(`W rozwiązaniu występują ${vowelCount} samogłoski`);
                break;
            }
        }

        return hints;
    }

    private randomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

}
