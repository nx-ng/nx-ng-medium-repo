import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component90Component } from './lib1-lib1-lib1component90.component';

describe('Lib1Lib1Lib1component90Component', () => {
  let component: Lib1Lib1Lib1component90Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
