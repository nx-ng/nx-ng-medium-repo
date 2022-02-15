import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component16Component } from './lib1-lib0component16.component';

describe('Lib1Lib0component16Component', () => {
  let component: Lib1Lib0component16Component;
  let fixture: ComponentFixture<Lib1Lib0component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
