import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib0component4Component } from './lib0-lib1-lib0component4.component';

describe('Lib0Lib1Lib0component4Component', () => {
  let component: Lib0Lib1Lib0component4Component;
  let fixture: ComponentFixture<Lib0Lib1Lib0component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib0component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib0component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
