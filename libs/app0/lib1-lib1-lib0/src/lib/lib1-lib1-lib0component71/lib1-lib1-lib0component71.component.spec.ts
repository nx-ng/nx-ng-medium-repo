import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component71Component } from './lib1-lib1-lib0component71.component';

describe('Lib1Lib1Lib0component71Component', () => {
  let component: Lib1Lib1Lib0component71Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
