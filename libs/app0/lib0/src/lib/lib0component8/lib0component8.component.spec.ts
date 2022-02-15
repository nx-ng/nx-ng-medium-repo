import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component8Component } from './lib0component8.component';

describe('Lib0component8Component', () => {
  let component: Lib0component8Component;
  let fixture: ComponentFixture<Lib0component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
