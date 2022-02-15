import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component31Component } from './lib1-lib0component31.component';

describe('Lib1Lib0component31Component', () => {
  let component: Lib1Lib0component31Component;
  let fixture: ComponentFixture<Lib1Lib0component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
