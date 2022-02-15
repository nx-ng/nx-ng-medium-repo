import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component44Component } from './lib0component44.component';

describe('Lib0component44Component', () => {
  let component: Lib0component44Component;
  let fixture: ComponentFixture<Lib0component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
