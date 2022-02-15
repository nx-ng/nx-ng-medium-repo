import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component78Component } from './lib0-lib0-lib1component78.component';

describe('Lib0Lib0Lib1component78Component', () => {
  let component: Lib0Lib0Lib1component78Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
