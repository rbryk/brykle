import { Injectable } from '@angular/core';
import { CharacterState } from "./character-state";
import { MatchType } from "./match-type";

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  public MAX_CHARACTERS = 5;

  public guesses : CharacterState[][] = [];
  public currentGuess: string[] = ['','','','',''];
  public currentGuessNumber : number = 1;
  public currentInputCharacter : number = 0;
  public matchCharacters : string[] = [];
  public partialCharacters : string[] = [];
  public missCharacters : string[] = [];
  public solution : string = '';

  private currentGuessResult : CharacterState[] = [];

  public constructor() {
    this.solution = 'WALEC';
  }

  public addCharacterToGuess(character: string) {
    if (this.currentInputCharacter < this.MAX_CHARACTERS) {
      this.currentGuess[this.currentInputCharacter] = character;
      this.currentInputCharacter++;
    }
  }

  public removeCharacterFromGuess() {
    if (this.currentInputCharacter > 0) {
      this.currentInputCharacter--;
      this.currentGuess[this.currentInputCharacter] = '';
    }
  }

  public applyCurrentGuess() {
    if (this.isGuessFilled()) {
      console.log('Apply!');
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

  public keyType(key: string) {
    return 'key-'.concat(this.matchType(key));
  }

  public matchType(key: string) {
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

  private isGuessFilled(){
    return this.currentGuess.indexOf('') === -1;
  }

}
