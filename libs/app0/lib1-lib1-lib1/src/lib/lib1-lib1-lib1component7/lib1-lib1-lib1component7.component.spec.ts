import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component7Component } from './lib1-lib1-lib1component7.component';

describe('Lib1Lib1Lib1component7Component', () => {
  let component: Lib1Lib1Lib1component7Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
