import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component37Component } from './lib0component37.component';

describe('Lib0component37Component', () => {
  let component: Lib0component37Component;
  let fixture: ComponentFixture<Lib0component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
