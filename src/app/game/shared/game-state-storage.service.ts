import {Injectable} from '@angular/core';
import {GameStateService} from "./game-state.service";

@Injectable({
    providedIn: 'root'
})
export class GameStateStorageService {

    constructor() {

    }

    save(game: GameStateService) {
        let key = this.getKey(game.startDate);
        let value = {
            solution: game.solution,
            guesses: game.guesses,
            hintUsed: game.hintUsed,
            matchCharacters: game.matchCharacters,
            partialCharacters: game.partialCharacters,
            missCharacters: game.missCharacters
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    load(game: GameStateService) {
        let gameState = JSON.parse(this.getSavedGameState(game));
        game.solution = gameState.solution;
        game.guesses = gameState.guesses;
        game.hintUsed = gameState.hintUsed;
        game.matchCharacters = gameState.matchCharacters;
        game.partialCharacters = gameState.partialCharacters;
        game.missCharacters = gameState.missCharacters;
        game.currentGuessNumber = game.guesses.length + 1;
    }

    clearGames() {
        localStorage.clear();
    }

    getSavedGameState(game: GameStateService): any {
        let state = localStorage.getItem(this.getKey(game.startDate));
        return state;
    }

    isGameStateSaved(game: GameStateService): boolean {
        return this.getSavedGameState(game) !== null;
    }

    private getKey(startDate: Date): string {
        let date = new Date(startDate);
        date.setHours(date.getHours(), 0, 0, 0);
        return date.toLocaleString();
    }
}
