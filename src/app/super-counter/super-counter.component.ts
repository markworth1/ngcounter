import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() count: Counter;

  constructor() {
  }

  ngOnInit() {
  }

  decrease() { this.count.value -= 3; }

  increase() { this.count.value += 3; }

}
