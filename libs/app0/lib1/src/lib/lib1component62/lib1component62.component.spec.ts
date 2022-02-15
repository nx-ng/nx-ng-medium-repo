import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component62Component } from './lib1component62.component';

describe('Lib1component62Component', () => {
  let component: Lib1component62Component;
  let fixture: ComponentFixture<Lib1component62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
