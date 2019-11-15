import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-optimized-drag-and-drop',
  templateUrl: './optimized-drag-and-drop.component.html',
  styleUrls: ['./optimized-drag-and-drop.component.scss']
})
export class OptimizedDragAndDropComponent implements OnInit {

  @ViewChild('draggable', {static: true }) draggable;
  @ViewChild('container', {static: true }) container;

  mouseMove$ = new Subject<any>();
  onMouseDown$ = new Subject<any>();
  onMouseUp$ = new Subject<any>();
  position$ = new BehaviorSubject({ top: 0, left: 0 });


  constructor(private zone: NgZone) {
  }

  ngOnInit() {

    this.zone.runOutsideAngular(()=>{
      this.container.nativeElement.addEventListener('mousemove', (e)=> this.onMouseMove(e));
      this.container.nativeElement.addEventListener('mouseup', (e)=> this.onMouseUp(e));
      this.draggable.nativeElement.addEventListener('mousedown', (e)=> this.onMouseDown(e));


      this.onMouseDown$.pipe(
        switchMapTo(this.mouseMove$.pipe(takeUntil(this.onMouseUp$))))
        .subscribe((evnt: MouseEvent) => {
          this.draggable.nativeElement.style.top = evnt.clientY + 'px';
          this.draggable.nativeElement.style.left = evnt.clientX + 'px';
        });
    })

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
