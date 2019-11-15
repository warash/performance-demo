import { Component } from '@angular/core';
import { CwisStateStoreService } from './child-with-internal-state/cwis-state-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'performance-demo';
  constructor(private state: CwisStateStoreService){

  }

  onChangeGlobalState() {
    this.state.increment();
  }
}
