import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component44Component } from './lib1-lib0-lib1component44.component';

describe('Lib1Lib0Lib1component44Component', () => {
  let component: Lib1Lib0Lib1component44Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
