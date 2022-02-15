import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component5Component } from './lib0component5.component';

describe('Lib0component5Component', () => {
  let component: Lib0component5Component;
  let fixture: ComponentFixture<Lib0component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
