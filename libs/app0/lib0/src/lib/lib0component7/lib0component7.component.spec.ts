import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component7Component } from './lib0component7.component';

describe('Lib0component7Component', () => {
  let component: Lib0component7Component;
  let fixture: ComponentFixture<Lib0component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
