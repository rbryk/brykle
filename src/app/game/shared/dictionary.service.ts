import {Injectable} from '@angular/core';
import {WordsDatabaseService} from "./words-database.service";

@Injectable({
    providedIn: 'root'
})
export class DictionaryService {

    private readonly _largePrimeNumber = 63949;

    private vowels: string = "EYUIOAĄĘÓ";
    private polishCharacters: string = "ĄĘÓŚĆŻŹŃŁ";
    public wordCount: number = 0;

    constructor(private wordsDatabase: WordsDatabaseService) {
        this.wordCount = this.wordsDatabase.words.length;
    }

    isGuessValid(word: string): boolean {
        return this.wordsDatabase.words.indexOf(word) > -1;
    }

    isVowel(character: string): boolean {
        return (this.vowels.indexOf(character) > -1);
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

    getWordForToday(): string {
        return this.wordsDatabase.words[this.getRandomPosition()];
    }


    private getRandomPosition() {
        let date = new Date();
        date.setHours(date.getHours(), 0, 0, 0);
        return (date.getTime() * this._largePrimeNumber) % this.wordCount;
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
