import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: CounterDetailComponent[] = []; 

  constructor() { }

  addCounter() {
    this.counters.push(new CounterDetailComponent())
  }

  ngOnInit() {
  }

}
