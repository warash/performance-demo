import { Component } from '@angular/core';
import { CwisStateStoreService } from '../cwis-state-store.service';

@Component({
  selector: 'app-grandparent-changin-state',
  templateUrl: './grandparent-changing-state.component.html',
  styleUrls: ['./grandparent-changing-state.component.scss']
})
export class GrandparentChangingStateComponent {

  constructor(private state: CwisStateStoreService) {

  }

  onChangeGlobalState() {
    this.state.increment();
  }

}
