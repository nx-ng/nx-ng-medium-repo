import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component12Component } from './lib1-lib0-lib1component12.component';

describe('Lib1Lib0Lib1component12Component', () => {
  let component: Lib1Lib0Lib1component12Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
