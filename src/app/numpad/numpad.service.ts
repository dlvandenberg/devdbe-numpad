import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class NumpadService {
  private result = 0;
  private display = '';
  private displaySubject = new BehaviorSubject<string>(this.display);
  public displayValue$ = this.displaySubject.asObservable();

  private activeOperatorSubject = new BehaviorSubject<string>('');
  public activeOperator$ = this.activeOperatorSubject.asObservable();

  private keepNumberOnScreen = false;

  public transmit(value: string, type: string): void {
    if (this.isOperator(type)) {
      this.processOperator(value);
    } else {
      this.setDisplayValue(this.keepNumberOnScreen ? value : (this.display += value));
    }
  }

  private setDisplayValue(value: string): void {
    this.display = value;
    this.displaySubject.next(this.display);
    this.keepNumberOnScreen = false;
  }

  private isOperator(type: string): boolean {
    return type === 'operator';
  }

  private processOperator(value: string): void {
    if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.calculateResult();
      this.result = 0;
      this.display = '';
      this.activeOperatorSubject.next('');
    } else if (value === '+/-') {
        this.transformSign();
    } else if (value === '%') {
      alert('Beep-boop!');
    } else if (this.display !== '') {
      if (this.operatorWasActive()) {
        this.calculateResult();
        this.keepNumberOnScreen = true;
        this.activeOperatorSubject.next(value);
      } else {
        if (this.result !== 0) {
          this.setDisplayValue('');
        } else {
          this.keepNumberOnScreen = true;
        }
        this.result = +this.display;
        this.activeOperatorSubject.next(value);
      }
    }
  }

  private transformSign(): void {
    if (('' + this.display).startsWith('-')) {
      this.display = this.display.substr(1, this.display.length+1);
    } else {
      this.display = '-' + this.display;
    }
    this.displaySubject.next(this.display);
  }

  private clear(): void  {
    this.activeOperatorSubject.next('');
    this.setDisplayValue('');
    this.result = 0;
  }

  private operatorWasActive(): boolean {
    return this.activeOperatorSubject.value !== '';
  }

  private calculateResult(): void {
    switch (this.activeOperatorSubject.value) {
      case '/':
        this.result /= +this.display;
        break;
      case 'x':
        this.result *= +this.display;
        break;
      case '-':
        this.result -= +this.display;
        break;
      case '+':
        this.result += +this.display;
        break;
    }
    this.displaySubject.next(this.result.toString());
  }
}
