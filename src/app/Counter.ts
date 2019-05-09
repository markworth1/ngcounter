import { timeout } from 'q';

export class Counter {
  value: number = 0;
  type: string = 'normal';
  changeValue: number = 1;

  constructor(val, type, changeValue) {
    this.value = val;
    this.type = type;
    this.changeValue = changeValue;
  }

  increase() {
    this.value += this.changeValue;
  }

  decrease() {
    this.value += this.changeValue;
  }

  start() {
    setInterval(() => this.increase(), 1000);
  }
}