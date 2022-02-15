import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0component3Component } from './lib0-lib0component3.component';

describe('Lib0Lib0component3Component', () => {
  let component: Lib0Lib0component3Component;
  let fixture: ComponentFixture<Lib0Lib0component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
