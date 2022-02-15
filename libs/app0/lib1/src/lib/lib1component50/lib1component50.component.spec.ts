import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component50Component } from './lib1component50.component';

describe('Lib1component50Component', () => {
  let component: Lib1component50Component;
  let fixture: ComponentFixture<Lib1component50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
