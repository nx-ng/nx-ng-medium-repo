import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component43Component } from './lib1-lib0-lib1component43.component';

describe('Lib1Lib0Lib1component43Component', () => {
  let component: Lib1Lib0Lib1component43Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
