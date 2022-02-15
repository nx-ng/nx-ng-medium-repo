import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component33Component } from './lib0-lib0-lib1component33.component';

describe('Lib0Lib0Lib1component33Component', () => {
  let component: Lib0Lib0Lib1component33Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
