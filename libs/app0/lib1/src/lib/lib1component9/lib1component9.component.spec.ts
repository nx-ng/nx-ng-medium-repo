import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component9Component } from './lib1component9.component';

describe('Lib1component9Component', () => {
  let component: Lib1component9Component;
  let fixture: ComponentFixture<Lib1component9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
