import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component52Component } from './lib1-lib0component52.component';

describe('Lib1Lib0component52Component', () => {
  let component: Lib1Lib0component52Component;
  let fixture: ComponentFixture<Lib1Lib0component52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
