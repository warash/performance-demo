import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { finalize, switchMapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drang-and-drop-sample',
  templateUrl: './drang-and-drop-sample.component.html',
  styleUrls: ['./drang-and-drop-sample.component.scss']
})
export class DrangAndDropSampleComponent implements OnInit {

  mouseMove$ = new Subject<any>();
  onMouseDown$ = new Subject<any>();
  onMouseUp$ = new Subject<any>();
  position$ = new BehaviorSubject({ top: 0, left: 0 });


  constructor() {
  }

  ngOnInit() {
    this.onMouseDown$.pipe(
      switchMapTo(this.mouseMove$.pipe(takeUntil(this.onMouseUp$))))
      .subscribe((evnt: MouseEvent) => {
        this.position$.next({ top: evnt.clientY, left: evnt.clientX });
      });
  }

  onMouseDown($event: MouseEvent) {
    this.onMouseDown$.next($event);
  }

  onMouseMove($event: MouseEvent) {
    this.mouseMove$.next($event);
  }

  onMouseUp($event: MouseEvent) {
    this.onMouseUp$.next($event);
  }
}
