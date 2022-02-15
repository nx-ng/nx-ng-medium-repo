import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component29Component } from './lib0component29.component';

describe('Lib0component29Component', () => {
  let component: Lib0component29Component;
  let fixture: ComponentFixture<Lib0component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
