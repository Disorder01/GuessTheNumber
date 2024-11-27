import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-hover',
  templateUrl: './info-hover.component.html',
  styleUrl: './info-hover.component.scss'
})
export class InfoHoverComponent {
  @Input() endNumber!: Number;
}
