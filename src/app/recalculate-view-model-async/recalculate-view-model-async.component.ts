import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-recalculate-view-model-async',
  templateUrl: './recalculate-view-model-async.component.html',
  styleUrls: ['./recalculate-view-model-async.component.scss']
})
export class RecalculateViewModelAsyncComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  data$;

  constructor() {
    const state =  new BehaviorSubject(10);

    this.data$ = state.pipe(map(i=>{
      return this.factorial(i);
    }))
  }

  factorial(num)  {
    console.log('calculating factorial');
    let result = 1;
    for (let i = 2; i <= num; i++)
      result = result * i;
    return result;
  }
  ngOnInit() {
  }
}
