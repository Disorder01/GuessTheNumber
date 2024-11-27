import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-difficulty',
  templateUrl: './choose-difficulty.component.html',
  styleUrl: './choose-difficulty.component.scss'
})
export class ChooseDifficultyComponent {
  isHoveringEasy = false;
  isHoveringNormal = false;
  isHoveringHard = false;
}
