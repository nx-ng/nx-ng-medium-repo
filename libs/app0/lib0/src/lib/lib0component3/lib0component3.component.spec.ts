import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component3Component } from './lib0component3.component';

describe('Lib0component3Component', () => {
  let component: Lib0component3Component;
  let fixture: ComponentFixture<Lib0component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
