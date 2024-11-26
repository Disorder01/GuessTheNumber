import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss'
})
export class GameplayComponent implements OnInit {

  difficulty: string = '';
  answer: string = 'test';
  resultMessage: string = '';
  firstNumber: number = 0;
  lastNumber: number = 10;
  randomNumber: number = 0;
  guessedNumber: number = 0;
  showResult: boolean = false;
  isCorrect: boolean = false;
  showHighlight: boolean = false;
  showOtherHighlight: boolean = false;
  isToLow: boolean = false;
  isToHigh: boolean = false;

  private readonly HIGHLIGHT_TIMEOUT: number = 500;
  private readonly HIGHLIGHT_REPETITIONS: number = 3; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.difficulty = params['difficulty'];
      console.log(this.difficulty);
    });

    switch (this.difficulty) {
      case 'easy': 
        this.lastNumber = 100;
        break;
      case 'normal':
        this.lastNumber = 500;
        break;
      case 'hardcore': 
        this.lastNumber = 1000;
        break;    
    }
    this.randomNumber = Math.floor(Math.random() * (this.lastNumber - this.firstNumber + 1)) + this.firstNumber;
  }

  guessNumber(): void {
    console.log(this.randomNumber);
    this.showResult = true;
    this.isCorrect = this.guessedNumber === this.randomNumber;

    if (this.isCorrect) {
      this.resultMessage = "Correct! You guessed the number!";
      this.triggerHighlight('right');
    } else if (this.guessedNumber < this.randomNumber) {
      this.resultMessage = "Wrong! Your number is too low!";
      this.triggerHighlight('wrong', true);
    } else {
      this.resultMessage = "Wrong! Your number is too high!";
      this.triggerHighlight('wrong', false);
    }
  }

  private triggerHighlight(type: 'right' | 'wrong', isLowOrHigh: boolean = false): void {
    const highlightType = type === 'right' ? 'showOtherHighlight' : 'showHighlight';
    this[highlightType] = true;

    let repetition = 0;

    const highlightInterval = setInterval(() => {
      if (repetition < this.HIGHLIGHT_REPETITIONS) {
        this[highlightType] = !this[highlightType];
        repetition++;
      } else {
        clearInterval(highlightInterval);
      }
    }, this.HIGHLIGHT_TIMEOUT);
  }
}
