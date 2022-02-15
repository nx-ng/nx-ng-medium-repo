import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component11Component } from './lib0-lib1component11.component';

describe('Lib0Lib1component11Component', () => {
  let component: Lib0Lib1component11Component;
  let fixture: ComponentFixture<Lib0Lib1component11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
