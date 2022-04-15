import {Injectable} from '@angular/core';
import {SolutionsDatabaseService} from "./solutions-database.service";

@Injectable({
    providedIn: 'root'
})
export class SolutionService {

    private readonly _largePrimeNumber = 3167;

    public wordCount: number = 0;

    constructor(private solutionsDatabase: SolutionsDatabaseService) {
        this.wordCount = this.solutionsDatabase.words.length;
    }

    getSolution(): string {
        return this.solutionsDatabase.words[this.getRandomPosition()];
    }

    private getRandomPosition() {
        let date = new Date();
        date.setHours(date.getHours(), 0, 0, 0);
        return (date.getTime() * this._largePrimeNumber) % this.wordCount;
    }
}
