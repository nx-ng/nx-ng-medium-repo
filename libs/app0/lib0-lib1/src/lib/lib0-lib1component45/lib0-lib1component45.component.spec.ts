import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component45Component } from './lib0-lib1component45.component';

describe('Lib0Lib1component45Component', () => {
  let component: Lib0Lib1component45Component;
  let fixture: ComponentFixture<Lib0Lib1component45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
