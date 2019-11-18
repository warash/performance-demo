import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recalculate-view-model-on-fly',
  templateUrl: './recalculate-view-model-on-fly.component.html',
  styleUrls: ['./recalculate-view-model-on-fly.component.scss']
})
export class RecalculateViewModelOnFlyComponent {

  @Input() firstName;
  @Input() lastName;

  get fullName() {
    console.log('calculate full name');
    return `${this.firstName} ${this.lastName}`;
  }

  okClicked() {
  }
}
