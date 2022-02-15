import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component49Component } from './lib0component49.component';

describe('Lib0component49Component', () => {
  let component: Lib0component49Component;
  let fixture: ComponentFixture<Lib0component49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component49Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
