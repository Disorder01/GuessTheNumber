import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ]
})
export class GameComponent implements OnInit {
  difficulty: string = '';
  showGameplay: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => { 
      this.difficulty = params['difficulty'];
    });
  }
}
