import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component58Component } from './lib0component58.component';

describe('Lib0component58Component', () => {
  let component: Lib0component58Component;
  let fixture: ComponentFixture<Lib0component58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
