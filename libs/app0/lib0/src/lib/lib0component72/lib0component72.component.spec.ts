import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component72Component } from './lib0component72.component';

describe('Lib0component72Component', () => {
  let component: Lib0component72Component;
  let fixture: ComponentFixture<Lib0component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
