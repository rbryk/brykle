import {Injectable} from '@angular/core';
import {WordsDatabaseService} from "./words-database.service";

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {

    private vowels: string = "EYUIOAĄĘÓ";
    private polishCharacters: string = "ĄĘÓŚĆŻŹŃŁ";

    constructor(private wordsDatabase: WordsDatabaseService) {
    }

    isGuessValid(word: string): boolean {
        return this.wordsDatabase.words.indexOf(word) > -1;
    }

    isVowel(character: string): boolean {
        return (this.vowels.indexOf(character) > -1);
    }

    countVowels(word: string): number {
        return word.split('').reduce((prev, next) => {
            return (this.isVowel(next)) ? prev + 1 : prev;
        }, 0);
    }

    hasPolishCharacters(word: string): boolean {
        return this.polishCharacters.split('').some(function (v, i, a) {
            return word.lastIndexOf(v) != -1;
        });
    }

    anyCharactersRepeated(solution: string): boolean {
        return solution.split("").some(function (v, i, a) {
            return a.lastIndexOf(v) != i;
        });
    }

    public attemptDeclination(attemptCount: number) {
        return "".concat(attemptCount.toString(), ' ', (attemptCount === 1) ? 'próbie' : 'próbach');
    }

    public hintCountDeclination(hintsCount: number) {
        return (hintsCount === 0)
            ? 'bez użycia podpowiedzi'
            : 'używając ' + hintsCount + ' podpowiedzi'
    }
}
