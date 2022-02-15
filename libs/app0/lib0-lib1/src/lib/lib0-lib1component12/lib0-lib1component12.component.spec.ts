import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component12Component } from './lib0-lib1component12.component';

describe('Lib0Lib1component12Component', () => {
  let component: Lib0Lib1component12Component;
  let fixture: ComponentFixture<Lib0Lib1component12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
