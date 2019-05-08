import { Component, OnInit, Input } from '@angular/core';
const defaultCount = 0;

@Component({
  selector: 'app-super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {
  @Input() count: number;

  constructor() {
    this.count = defaultCount;
  }

  ngOnInit() {
  }

  decrease() { this.count -= 3; }

  increase() { this.count += 3; }

}
