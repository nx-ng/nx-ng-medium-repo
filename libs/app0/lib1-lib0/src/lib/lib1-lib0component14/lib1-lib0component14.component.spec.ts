import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component14Component } from './lib1-lib0component14.component';

describe('Lib1Lib0component14Component', () => {
  let component: Lib1Lib0component14Component;
  let fixture: ComponentFixture<Lib1Lib0component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
