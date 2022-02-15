import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component83Component } from './lib0component83.component';

describe('Lib0component83Component', () => {
  let component: Lib0component83Component;
  let fixture: ComponentFixture<Lib0component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
