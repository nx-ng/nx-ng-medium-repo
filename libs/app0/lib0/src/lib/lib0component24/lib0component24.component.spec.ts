import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component24Component } from './lib0component24.component';

describe('Lib0component24Component', () => {
  let component: Lib0component24Component;
  let fixture: ComponentFixture<Lib0component24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
