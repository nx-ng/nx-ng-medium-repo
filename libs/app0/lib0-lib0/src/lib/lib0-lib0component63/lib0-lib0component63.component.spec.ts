import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component63Component } from './lib0-lib0component63.component';

describe('Lib0Lib0component63Component', () => {
  let component: Lib0Lib0component63Component;
  let fixture: ComponentFixture<Lib0Lib0component63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component63Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
