import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Draw } from '../../core';

@Component({
  selector: 'draw-list-item',
  templateUrl: './draw-list-item.component.html',
  styleUrls: ['./draw-list-item.component.css'],
})
export class DrawListItemComponent {

  constructor() { }

  @Input() draw: Draw;
}
