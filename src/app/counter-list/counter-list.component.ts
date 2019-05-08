import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { SuperCounterComponent } from '../super-counter/super-counter.component';
import { Counter } from '../Counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: Counter[] = []; 
  superCounters: Counter[] = [];

  constructor() { }

  addCounter() {
    this.counters.push(new Counter(0));
    //this.counters.push(new CounterDetailComponent())
    if (this.counters.length === 6) {
      let superCounterInitialValue:number = this.counters.reduce((tot,val) => {
        console.log(val.value);
        tot += val.value;
        return tot;
      }, 0)
      console.log(superCounterInitialValue);
      this.superCounters.push(new Counter(superCounterInitialValue));
      this.counters = [];
    }
  }

  ngOnInit() {
  }

}
