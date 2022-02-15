import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component50Component } from './lib1-lib0component50.component';

describe('Lib1Lib0component50Component', () => {
  let component: Lib1Lib0component50Component;
  let fixture: ComponentFixture<Lib1Lib0component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
