import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // Importiere Params

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  difficulty: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => { // Verwende Params hier
      this.difficulty = params['difficulty'] || 'normal'; // Standardwert 'normal'
    });
  }
}
