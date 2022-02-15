import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component54Component } from './lib0component54.component';

describe('Lib0component54Component', () => {
  let component: Lib0component54Component;
  let fixture: ComponentFixture<Lib0component54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component54Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
