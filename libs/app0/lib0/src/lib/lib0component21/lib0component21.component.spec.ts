import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component21Component } from './lib0component21.component';

describe('Lib0component21Component', () => {
  let component: Lib0component21Component;
  let fixture: ComponentFixture<Lib0component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
