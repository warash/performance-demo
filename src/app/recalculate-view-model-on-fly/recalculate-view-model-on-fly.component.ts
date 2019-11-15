import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-recalculate-view-model-on-fly',
  templateUrl: './recalculate-view-model-on-fly.component.html',
  styleUrls: ['./recalculate-view-model-on-fly.component.scss']
})
export class RecalculateViewModelOnFlyComponent implements OnChanges {

  @Input() firstName;
  @Input() lastName;


  get fullName(){
    console.log('calculate full name');
    return `${this.firstName} ${this.lastName}`;
  }


  ngOnChanges(){

  }


  okClicked() {
  }
}
