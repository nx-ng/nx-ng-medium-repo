import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component80Component } from './lib0component80.component';

describe('Lib0component80Component', () => {
  let component: Lib0component80Component;
  let fixture: ComponentFixture<Lib0component80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
