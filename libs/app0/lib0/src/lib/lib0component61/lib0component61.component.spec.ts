import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component61Component } from './lib0component61.component';

describe('Lib0component61Component', () => {
  let component: Lib0component61Component;
  let fixture: ComponentFixture<Lib0component61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
