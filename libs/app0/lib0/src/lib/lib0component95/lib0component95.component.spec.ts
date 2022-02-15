import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component95Component } from './lib0component95.component';

describe('Lib0component95Component', () => {
  let component: Lib0component95Component;
  let fixture: ComponentFixture<Lib0component95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
