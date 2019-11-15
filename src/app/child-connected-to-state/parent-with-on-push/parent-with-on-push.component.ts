import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent-with-on-push',
  templateUrl: './parent-with-on-push.component.html',
  styleUrls: ['./parent-with-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentWithOnPushComponent {


}
