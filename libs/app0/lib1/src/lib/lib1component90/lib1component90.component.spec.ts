import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component90Component } from './lib1component90.component';

describe('Lib1component90Component', () => {
  let component: Lib1component90Component;
  let fixture: ComponentFixture<Lib1component90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
