import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NumpadService } from './numpad.service';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
  providers: [ NumpadService ],
  encapsulation: ViewEncapsulation.None
})
export class NumpadComponent implements OnInit {

  public pads = [
    { label: 'C', type: 'operator' },
    { label: '+/-', type: 'operator' },
    { label: '%', type: 'operator' },
    { label: '/', type: 'operator' },
    { label: 7, type: 'number' },
    { label: 8, type: 'number' },
    { label: 9, type: 'number' },
    { label: 'x', type: 'operator' },
    { label: 4, type: 'number' },
    { label: 5, type: 'number' },
    { label: 6, type: 'number' },
    { label: '-', type: 'operator' },
    { label: 1, type: 'number' },
    { label: 2, type: 'number' },
    { label: 3, type: 'number' },
    { label: '+', type: 'operator' },
    { label: 0, type: 'number' },
    { label: '.', type: 'number' },
    { label: '=', type: 'operator' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
