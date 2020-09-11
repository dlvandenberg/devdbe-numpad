import { Component, OnInit } from '@angular/core';
import { NumpadService } from '../numpad.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public readonly numpad: NumpadService) { }

  ngOnInit(): void {
  }

}
