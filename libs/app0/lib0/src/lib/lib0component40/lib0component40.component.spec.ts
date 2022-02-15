import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component40Component } from './lib0component40.component';

describe('Lib0component40Component', () => {
  let component: Lib0component40Component;
  let fixture: ComponentFixture<Lib0component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
