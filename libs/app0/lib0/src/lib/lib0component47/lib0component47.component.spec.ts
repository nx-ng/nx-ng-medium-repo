import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component47Component } from './lib0component47.component';

describe('Lib0component47Component', () => {
  let component: Lib0component47Component;
  let fixture: ComponentFixture<Lib0component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
