import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component19Component } from './lib1-lib0component19.component';

describe('Lib1Lib0component19Component', () => {
  let component: Lib1Lib0component19Component;
  let fixture: ComponentFixture<Lib1Lib0component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
