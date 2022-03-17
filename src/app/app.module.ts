import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './game/game-board/tile/tile.component';
import { RowComponent } from './game/game-board/row/row.component';
import { GameBoardComponent } from './game/game-board/game-board.component';
import { KeyboardComponent } from './game/keyboard/keyboard.component';
import { KeyboardKeyComponent } from "./game/keyboard/keyboard-key/keyboard-key.component";
import { GameComponent } from './game/game.component';
import { InputRowComponent } from './game/game-board/input-row/input-row.component';
import { InputTileComponent } from './game/game-board/input-tile/input-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    RowComponent,
    GameBoardComponent,
    KeyboardComponent,
    KeyboardKeyComponent,
    GameComponent,
    InputRowComponent,
    InputTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
