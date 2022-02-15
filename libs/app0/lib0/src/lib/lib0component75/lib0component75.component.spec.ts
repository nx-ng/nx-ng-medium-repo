import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component75Component } from './lib0component75.component';

describe('Lib0component75Component', () => {
  let component: Lib0component75Component;
  let fixture: ComponentFixture<Lib0component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
