import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component73Component } from './lib0component73.component';

describe('Lib0component73Component', () => {
  let component: Lib0component73Component;
  let fixture: ComponentFixture<Lib0component73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
