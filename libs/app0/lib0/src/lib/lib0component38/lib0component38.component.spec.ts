import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component38Component } from './lib0component38.component';

describe('Lib0component38Component', () => {
  let component: Lib0component38Component;
  let fixture: ComponentFixture<Lib0component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
