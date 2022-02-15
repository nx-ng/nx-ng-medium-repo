import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component26Component } from './lib0component26.component';

describe('Lib0component26Component', () => {
  let component: Lib0component26Component;
  let fixture: ComponentFixture<Lib0component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
