import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nev-children',
  templateUrl: './nev-children.component.html',
  styleUrls: ['./nev-children.component.scss']
})
export class NevChildrenComponent implements OnInit {

  counter = 1;
  @ViewChild('button', { static: true }) button;

  ngOnInit() {
    this.button.nativeElement.addEventListener('click', this.onIncrementInternalState.bind(this));
  }

  onIncrementInternalState() {
    this.counter++;
  }
}
