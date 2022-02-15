import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component57Component } from './lib0component57.component';

describe('Lib0component57Component', () => {
  let component: Lib0component57Component;
  let fixture: ComponentFixture<Lib0component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
