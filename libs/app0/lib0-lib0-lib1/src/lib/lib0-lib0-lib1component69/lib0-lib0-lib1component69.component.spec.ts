import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component69Component } from './lib0-lib0-lib1component69.component';

describe('Lib0Lib0Lib1component69Component', () => {
  let component: Lib0Lib0Lib1component69Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
