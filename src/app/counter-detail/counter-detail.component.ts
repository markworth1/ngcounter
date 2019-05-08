import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() count: Counter;

  constructor() {
  }

  ngOnInit() {
  }

  decrease() { this.count.value--; }

  increase() { this.count.value++; }

}
