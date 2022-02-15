import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component92Component } from './lib0component92.component';

describe('Lib0component92Component', () => {
  let component: Lib0component92Component;
  let fixture: ComponentFixture<Lib0component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
