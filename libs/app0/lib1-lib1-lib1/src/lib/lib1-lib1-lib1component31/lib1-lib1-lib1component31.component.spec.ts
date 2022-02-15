import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component31Component } from './lib1-lib1-lib1component31.component';

describe('Lib1Lib1Lib1component31Component', () => {
  let component: Lib1Lib1Lib1component31Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
