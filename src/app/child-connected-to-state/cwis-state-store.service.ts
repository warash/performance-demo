import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CwisStateStoreService {

  state$ = new BehaviorSubject(1);

  constructor() {
  }

  get state() {
    return this.state$.getValue();
  }

  set state(value) {
    this.state$.next(value);
  }

  increment() {
    this.state = this.state  + 1;
  }
}
