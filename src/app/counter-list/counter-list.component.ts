import { Component, OnInit } from '@angular/core';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';
import { Counter } from '../Counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: Counter[] = []; 
  superCounters: Counter[] = [];
  superDuperCounters: Counter[] = [];
  colossalCounters: Counter[] = [];

  constructor() { }

  addCounter() {
    this.counters.push(new Counter(0, 'normal', 1));

    if (this.counters.length === 7) {
      let superCounterInitialValue:number = this.counters.reduce((tot,val) => {
        console.log(val.value);
        tot += val.value;
        return tot;
      }, 0)

      this.superCounters.push(new Counter(superCounterInitialValue, 'super', 3));
      this.counters = [];
    }

    if (this.superCounters.length === 4) {
      let initialValue:number = this.superCounters.reduce((tot,val) => {
        console.log(val.value);
        tot += val.value;
        return tot;
      }, 0)

      this.superDuperCounters.push(new Counter(initialValue, 'super-duper', 1));
      this.superCounters = [];
    }

    if (this.superDuperCounters.length === 4) {
      let initialValue:number = this.superDuperCounters.reduce((tot,val) => {
        console.log(val.value);
        tot += val.value;
        return tot;
      }, 0)

      let colossalCounter = new Counter(initialValue, 'colossal', 1);
      this.colossalCounters.push(colossalCounter);
      colossalCounter.start();
      this.superDuperCounters = [];
    }

  }

  ngOnInit() {
  }

}
