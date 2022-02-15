import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component64Component } from './lib1component64.component';

describe('Lib1component64Component', () => {
  let component: Lib1component64Component;
  let fixture: ComponentFixture<Lib1component64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
