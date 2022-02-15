import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component73Component } from './lib0-lib1component73.component';

describe('Lib0Lib1component73Component', () => {
  let component: Lib0Lib1component73Component;
  let fixture: ComponentFixture<Lib0Lib1component73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
