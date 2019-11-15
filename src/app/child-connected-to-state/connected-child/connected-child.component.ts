import { Component } from '@angular/core';
import { CwisStateStoreService } from '../cwis-state-store.service';

@Component({
  selector: 'app-connected-child',
  templateUrl: './connected-child.component.html',
  styleUrls: ['./connected-child.component.scss']
})
export class ConnectedChild {

  globalState;

  globalState$ = this.store.state$;

  constructor(private store: CwisStateStoreService) {

    this.store.state$.subscribe(state => {
      this.globalState = state;
    });
  }


}
