import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component34Component } from './lib0component34.component';

describe('Lib0component34Component', () => {
  let component: Lib0component34Component;
  let fixture: ComponentFixture<Lib0component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
