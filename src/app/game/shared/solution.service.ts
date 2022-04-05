import {Injectable} from '@angular/core';
import {WordsDatabaseService} from "./words-database.service";

@Injectable({
    providedIn: 'root'
})
export class SolutionService {

    private readonly _largePrimeNumber = 63469;

    public wordCount: number = 0;

    constructor(private wordsDatabase: WordsDatabaseService) {
        this.wordCount = this.wordsDatabase.words.length;
    }

    getSolution(): string {
        return this.wordsDatabase.words[this.getRandomPosition()];
    }

    private getRandomPosition() {
        let date = new Date();
        date.setHours(date.getHours(), 0, 0, 0);
        return (date.getTime() * this._largePrimeNumber) % this.wordCount;
    }
}
