import {Injectable} from '@angular/core';
import {CharacterState} from "./character-state";
import {MatchType} from "./match-type";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {

    public MAX_CHARACTERS = 5;

    public guesses: CharacterState[][] = [];
    public currentGuess: string[] = ['', '', '', '', ''];
    public currentGuessNumber: number = 1;
    public currentInputCharacter: number = 0;

    public matchCharacters: string[] = [];
    public partialCharacters: string[] = [];
    public missCharacters: string[] = [];

    public solution: string = '';

    private currentGuessResult: CharacterState[] = [];

    public constructor() {
        this.solution = 'BRYKL';
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
        if (this.isGuessFilled()) {
            this.currentGuessResult = [];
            this.currentGuess.forEach((character, index) => {
                let res: CharacterState;
                if (this.solution.charAt(index) === character) {
                    res = new CharacterState(character, MatchType.Match);
                    this.matchCharacters.push(character);
                } else {
                    if (this.solution.charAt(index) !== character && this.solution.indexOf(character) > -1) {
                        res = new CharacterState(character, MatchType.Partial);
                        this.partialCharacters.push(character);
                    } else {
                        res = new CharacterState(character, MatchType.Miss);
                        this.missCharacters.push(character);
                    }
                }
                this.currentGuessResult.push(res);
            })
            this.guesses.push(this.currentGuessResult);
            this.currentGuessNumber++;
            this.currentInputCharacter = 0;
            this.currentGuess = ['', '', '', '', ''];
        }
    }

    public keyType(key: string): string {
        return 'key-'.concat(this.matchType(key));
    }

    public matchType(key: string): MatchType {
        if (this.matchCharacters.indexOf(key) > -1) {
            return MatchType.Match;
        }
        if (this.missCharacters.indexOf(key) > -1) {
            return MatchType.Miss;
        }
        if (this.partialCharacters.indexOf(key) > -1) {
            return MatchType.Partial;
        }
        return MatchType.None;
    }

    public isOver(): boolean {
        return this.lastGuessed() === this.solution;
    }

    private lastGuessed(): string | undefined {
        if (this.currentGuessNumber == 1) {
            return undefined;
        }
        return "".concat(...this.guesses[this.currentGuessNumber - 2].map((value: CharacterState) => {
            return value.character;
        }));
    }

    private isGuessFilled(): boolean {
        return this.currentGuess.indexOf('') === -1;
    }

}
