import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component39Component } from './lib0component39.component';

describe('Lib0component39Component', () => {
  let component: Lib0component39Component;
  let fixture: ComponentFixture<Lib0component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
