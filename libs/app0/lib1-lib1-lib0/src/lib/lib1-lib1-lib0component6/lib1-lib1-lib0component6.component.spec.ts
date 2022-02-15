import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component6Component } from './lib1-lib1-lib0component6.component';

describe('Lib1Lib1Lib0component6Component', () => {
  let component: Lib1Lib1Lib0component6Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
