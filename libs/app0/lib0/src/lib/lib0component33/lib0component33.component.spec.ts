import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component33Component } from './lib0component33.component';

describe('Lib0component33Component', () => {
  let component: Lib0component33Component;
  let fixture: ComponentFixture<Lib0component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
