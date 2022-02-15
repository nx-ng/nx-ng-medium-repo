import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component82Component } from './lib0component82.component';

describe('Lib0component82Component', () => {
  let component: Lib0component82Component;
  let fixture: ComponentFixture<Lib0component82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
