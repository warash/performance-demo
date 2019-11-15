import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevParentComponent } from './nev-parent.component';

describe('NewParentComponent', () => {
  let component: NevParentComponent;
  let fixture: ComponentFixture<NevParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
