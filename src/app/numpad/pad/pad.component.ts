import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { NumpadService } from '../numpad.service';

@Component({
  selector: 'app-pad',
  template: `
    <button class="btn-pad" [ngClass]="type" (click)="numpad.transmit(label, type)">{{ label }}</button>
  `,
  styleUrls: ['./pad.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PadComponent implements OnInit {

  @Input()
  public label: number | string;

  @Input()
  public type: 'number' | 'operator';

  @HostBinding('class.active')
  public active = false;

  constructor(public readonly numpad: NumpadService) { }

  ngOnInit(): void {
    this.numpad.activeOperator$.subscribe((active) => {
      this.active = active === this.label;
    });
  }

}
