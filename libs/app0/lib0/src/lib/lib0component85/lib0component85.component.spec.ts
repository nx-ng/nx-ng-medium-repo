import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component85Component } from './lib0component85.component';

describe('Lib0component85Component', () => {
  let component: Lib0component85Component;
  let fixture: ComponentFixture<Lib0component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
