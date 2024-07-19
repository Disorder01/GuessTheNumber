import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.scss'
})
export class GameplayComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  difficulty: string = '';
  answer: string = 'test';
  firstNumber: number = 0;
  lastNumber: number = 10;
  randomNumber: number = 0;
  guessedNumber: number = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.difficulty = params['difficulty'];
      console.log(this.difficulty);
    });

    switch(this.difficulty) {
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

  guessNumber() {
    
    console.log(this.randomNumber)

    if(this.guessedNumber == this.randomNumber) {
      console.log('Correct!');
    } else if (this.guessedNumber < this.randomNumber) {
      console.log('To low!');
    } else if(this.guessedNumber > this.randomNumber) {
      console.log('to high!');
    }
  }
}
