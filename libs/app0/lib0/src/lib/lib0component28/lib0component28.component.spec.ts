import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component28Component } from './lib0component28.component';

describe('Lib0component28Component', () => {
  let component: Lib0component28Component;
  let fixture: ComponentFixture<Lib0component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
