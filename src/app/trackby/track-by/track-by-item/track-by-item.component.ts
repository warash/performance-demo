import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by-item',
  templateUrl: './track-by-item.component.html',
  styleUrls: ['./track-by-item.component.scss']
})
export class TrackByItemComponent implements OnInit {

  @Input() counter;
  constructor() {
    console.log('created')
  }

  ngOnInit() {
  }

}
