import { Component, OnInit, ViewChild } from '@angular/core';
import { CwisStateStoreService } from '../cwis-state-store.service';

@Component({
  selector: 'app-child-with-internal-state',
  templateUrl: './child-with-internal-state.component.html',
  styleUrls: ['./child-with-internal-state.component.scss']
})
export class ChildWithInternalStateComponent implements OnInit {

  counter = 1;

  @ViewChild('button', { static: true }) button;
  globalState;
  constructor(private store: CwisStateStoreService) {

    this.store.state$.subscribe(state=>{
      this.globalState = state;
    })
  }


  ngDoCheck(){
    console.log('check');
  }

  ngOnInit() {
    this.button.nativeElement.addEventListener('click', this.onIncrementInternalState.bind(this));
  }

  onIncrementInternalState() {
    this.counter++;
  }


}
