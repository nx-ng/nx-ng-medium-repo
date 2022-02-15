import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component40Component } from './lib1-lib1-lib1component40.component';

describe('Lib1Lib1Lib1component40Component', () => {
  let component: Lib1Lib1Lib1component40Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
