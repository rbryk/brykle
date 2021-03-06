import {Injectable} from '@angular/core';
import {CharacterState} from "./character-state";
import {MatchType} from "./match-type";
import {SolutionService} from "./solution.service";
import {GameStateStorageService} from "./game-state-storage.service";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {

    public readonly MAX_CHARACTERS = 5;
    public readonly MAX_GUESSES = 6;

    public guesses: CharacterState[][] = [];
    public currentGuess: string[] = ['', '', '', '', ''];
    public currentGuessNumber: number = 1;
    public currentInputCharacter: number = 0;

    public matchCharacters: string[] = [];
    public partialCharacters: string[] = [];
    public missCharacters: string[] = [];

    public solution: string = '';
    public startDate: Date;

    public hintUsed: number = 0;

    public constructor(private solutionService: SolutionService, private gameStateStorage: GameStateStorageService) {
        this.startDate = new Date();
        if (gameStateStorage.isGameStateSaved(this)) {
            gameStateStorage.load(this);
        } else {
            gameStateStorage.clearGames();
            this.solution = this.solutionService.getSolution();
            gameStateStorage.save(this);
        }
    }

    public clear() {
        this.guesses = [];
        this.currentGuess = this.clearGuess();
        this.matchCharacters = [];
        this.partialCharacters = [];
        this.missCharacters = [];
        this.currentInputCharacter = 0;
        this.currentGuessNumber = 1;
        this.gameStateStorage.save(this);
    }

    public clearGuess(): string[] {
        return ['', '', '', '', ''];
    }

    public guessesButLast(): CharacterState[][] {
        return this.guesses.slice(0, -1);
    }

    public lastGuess(): CharacterState[] {
        return this.guesses[this.currentGuessNumber - 2];
    }

    public addCharacterToGuess(character: string): void {
        if (this.currentInputCharacter < this.MAX_CHARACTERS) {
            this.currentGuess[this.currentInputCharacter] = character;
            this.currentInputCharacter++;
        }
    }

    public removeCharacterFromGuess(): void {
        if (this.currentInputCharacter > 0) {
            this.currentInputCharacter--;
            this.currentGuess[this.currentInputCharacter] = '';
        }
    }

    public applyCurrentGuess(): void {
        this.guesses.push(this.checkCurrentGuessResult());
        this.currentGuessNumber++;
        this.currentInputCharacter = 0;
        this.currentGuess = this.clearGuess();
        this.gameStateStorage.save(this);
    }

    private checkCurrentGuessResult(): CharacterState[] {
        let currentGuessResult: CharacterState[] = [];
        let markedSolution = this.solution.split('');
        let markedGuess = this.currentGuess;

        // find match
        markedGuess.forEach((character, index) => {
            if (markedSolution[index] === character) {
                currentGuessResult[index] = new CharacterState(character, MatchType.Match);
                this.matchCharacters.push(character);
                markedSolution[index] = '';
                markedGuess[index] = ''
            }
        });

        // find partial
        markedGuess.forEach((character, index) => {
            if (character !== '') {
                let indexOfMatch = markedSolution.indexOf(character);
                if (markedSolution[index] !== character && indexOfMatch > -1) {
                    currentGuessResult[index] = new CharacterState(character, MatchType.Partial);
                    this.partialCharacters.push(character);
                    markedSolution[indexOfMatch] = '';
                    markedGuess[index] = ''
                }
            }
        });

        // find miss
        markedGuess.forEach((character, index) => {
            if (character !== '') {
                currentGuessResult[index] = new CharacterState(character, MatchType.Miss);
                this.missCharacters.push(character);
            }
        });

        return currentGuessResult;
    }

    getCurrentGuess(): string {
        return "".concat(...this.currentGuess);
    }

    public keyType(key: string): string {
        return 'key-'.concat(this.matchType(key));
    }

    public matchType(key: string): MatchType {
        if (this.matchCharacters.indexOf(key) > -1 || key === 'OK') {
            return MatchType.Match;
        }
        if (this.partialCharacters.indexOf(key) > -1) {
            return MatchType.Partial;
        }
        if (this.missCharacters.indexOf(key) > -1 || key === '<<') {
            return MatchType.Miss;
        }
        return MatchType.None;
    }

    public isOver(): boolean {
        return this.youWin() || this.youLose();
    }

    public youWin(): boolean {
        return this.lastGuessed() === this.solution && this.currentGuessNumber <= 7
    }

    public youLose(): boolean {
        return this.currentGuessNumber > 6;
    }

    public emptyLines() {
        return this.currentGuessNumber < 6 ? [...Array(this.MAX_GUESSES - this.currentGuessNumber).keys()] : [];
    }

    private lastGuessed(): string | undefined {
        if (this.currentGuessNumber == 1) {
            return undefined;
        }
        return "".concat(...this.guesses[this.currentGuessNumber - 2].map((value: CharacterState) => {
            return value.character;
        }));
    }

    public isGuessFilled(): boolean {
        return this.currentGuess.indexOf('') === -1;
    }

    public nextBrykleHour(): string {
        let nextBrykleDate = new Date(this.startDate);
        nextBrykleDate.setHours(nextBrykleDate.getHours() + 1, 0, 0, 0);
        return nextBrykleDate.toLocaleString('pl-PL', {hour: 'numeric', minute: '2-digit'});
    }
}
