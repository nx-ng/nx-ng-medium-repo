import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component35Component } from './lib0component35.component';

describe('Lib0component35Component', () => {
  let component: Lib0component35Component;
  let fixture: ComponentFixture<Lib0component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
