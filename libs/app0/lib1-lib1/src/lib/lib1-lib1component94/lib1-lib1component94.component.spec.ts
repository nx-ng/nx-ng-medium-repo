import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component94Component } from './lib1-lib1component94.component';

describe('Lib1Lib1component94Component', () => {
  let component: Lib1Lib1component94Component;
  let fixture: ComponentFixture<Lib1Lib1component94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
