import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nev-parent',
  templateUrl: './nev-parent.component.html',
  styleUrls: ['./nev-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NevParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
