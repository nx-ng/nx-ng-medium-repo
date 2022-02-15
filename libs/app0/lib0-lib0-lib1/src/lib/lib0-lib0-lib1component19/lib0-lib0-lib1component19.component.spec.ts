import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component19Component } from './lib0-lib0-lib1component19.component';

describe('Lib0Lib0Lib1component19Component', () => {
  let component: Lib0Lib0Lib1component19Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
