import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component80Component } from './lib0-lib1component80.component';

describe('Lib0Lib1component80Component', () => {
  let component: Lib0Lib1component80Component;
  let fixture: ComponentFixture<Lib0Lib1component80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
