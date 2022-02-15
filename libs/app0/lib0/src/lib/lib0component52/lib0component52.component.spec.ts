import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component52Component } from './lib0component52.component';

describe('Lib0component52Component', () => {
  let component: Lib0component52Component;
  let fixture: ComponentFixture<Lib0component52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
