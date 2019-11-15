import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevChildrenComponent } from './nev-children.component';

describe('NevChildrenComponent', () => {
  let component: NevChildrenComponent;
  let fixture: ComponentFixture<NevChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
