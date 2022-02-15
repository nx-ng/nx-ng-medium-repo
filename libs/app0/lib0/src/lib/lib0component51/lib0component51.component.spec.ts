import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component51Component } from './lib0component51.component';

describe('Lib0component51Component', () => {
  let component: Lib0component51Component;
  let fixture: ComponentFixture<Lib0component51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
