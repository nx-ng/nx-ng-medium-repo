import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component13Component } from './lib0component13.component';

describe('Lib0component13Component', () => {
  let component: Lib0component13Component;
  let fixture: ComponentFixture<Lib0component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
