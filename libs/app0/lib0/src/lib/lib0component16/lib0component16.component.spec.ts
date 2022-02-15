import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component16Component } from './lib0component16.component';

describe('Lib0component16Component', () => {
  let component: Lib0component16Component;
  let fixture: ComponentFixture<Lib0component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
