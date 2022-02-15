import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component21Component } from './lib1-lib0-lib1component21.component';

describe('Lib1Lib0Lib1component21Component', () => {
  let component: Lib1Lib0Lib1component21Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
