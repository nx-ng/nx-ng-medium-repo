import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component53Component } from './lib1-lib1component53.component';

describe('Lib1Lib1component53Component', () => {
  let component: Lib1Lib1component53Component;
  let fixture: ComponentFixture<Lib1Lib1component53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
