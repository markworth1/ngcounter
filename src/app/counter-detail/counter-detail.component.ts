import { Component, OnInit, Input } from '@angular/core';

const defaultCount: number = 0;

@Component({
  selector: 'app-counter-detail',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() count: number;

  constructor() {
    this.count = defaultCount;
  }

  ngOnInit() {
  }

  decrease() { this.count--; }

  increase() { this.count++; }

}
