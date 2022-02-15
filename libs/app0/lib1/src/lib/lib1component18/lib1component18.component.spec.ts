import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component18Component } from './lib1component18.component';

describe('Lib1component18Component', () => {
  let component: Lib1component18Component;
  let fixture: ComponentFixture<Lib1component18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
