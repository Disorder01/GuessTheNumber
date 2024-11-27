import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ChooseDifficultyComponent } from './game/choose-difficulty/choose-difficulty.component';
import { GameplayComponent } from './game/gameplay/gameplay.component';
import { FormsModule } from '@angular/forms';
import { InfoHoverComponent } from './game/info-hover/info-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameComponent,
    TutorialComponent,
    ChooseDifficultyComponent,
    GameplayComponent,
    InfoHoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
