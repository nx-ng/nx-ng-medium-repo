import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1Lib1component4Component } from './lib0-lib1-lib1component4.component';

describe('Lib0Lib1Lib1component4Component', () => {
  let component: Lib0Lib1Lib1component4Component;
  let fixture: ComponentFixture<Lib0Lib1Lib1component4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1Lib1component4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1Lib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
