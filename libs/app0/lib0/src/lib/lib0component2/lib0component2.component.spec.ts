import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component2Component } from './lib0component2.component';

describe('Lib0component2Component', () => {
  let component: Lib0component2Component;
  let fixture: ComponentFixture<Lib0component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
