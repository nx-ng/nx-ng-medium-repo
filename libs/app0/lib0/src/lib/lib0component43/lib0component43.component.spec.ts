import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component43Component } from './lib0component43.component';

describe('Lib0component43Component', () => {
  let component: Lib0component43Component;
  let fixture: ComponentFixture<Lib0component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
