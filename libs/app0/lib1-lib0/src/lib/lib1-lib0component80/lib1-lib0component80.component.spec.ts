import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component80Component } from './lib1-lib0component80.component';

describe('Lib1Lib0component80Component', () => {
  let component: Lib1Lib0component80Component;
  let fixture: ComponentFixture<Lib1Lib0component80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
