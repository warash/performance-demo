import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent implements OnInit {

  items = [
    { id: 1, counter: 1 },
    { id: 2, counter: 1 },
    { id: 3, counter: 1 },
    { id: 4, counter: 1 },
    { id: 5, counter: 1 },
    { id: 6, counter: 1 },
    { id: 7, counter: 1 },
    { id: 8, counter: 1 },
    { id: 9, counter: 1 },
    { id: 10, counter: 1 },
    { id: 11, counter: 1 },
  ];

  trackById(index, itm) {
    return itm.id;
  }

  constructor() {
  }

  ngOnInit() {
  }

  updateCounter() {
    this.items = this.items.map(itm => {
      return { ...itm, counter: Math.random() };
    });
  }
}
