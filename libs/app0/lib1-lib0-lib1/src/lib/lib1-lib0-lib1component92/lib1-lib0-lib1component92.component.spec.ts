import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0Lib1component92Component } from './lib1-lib0-lib1component92.component';

describe('Lib1Lib0Lib1component92Component', () => {
  let component: Lib1Lib0Lib1component92Component;
  let fixture: ComponentFixture<Lib1Lib0Lib1component92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0Lib1component92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0Lib1component92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
