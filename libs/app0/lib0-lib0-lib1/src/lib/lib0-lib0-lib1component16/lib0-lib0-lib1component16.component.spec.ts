import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component16Component } from './lib0-lib0-lib1component16.component';

describe('Lib0Lib0Lib1component16Component', () => {
  let component: Lib0Lib0Lib1component16Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
