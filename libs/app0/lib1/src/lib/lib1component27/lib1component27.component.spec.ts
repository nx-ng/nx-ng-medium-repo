import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component27Component } from './lib1component27.component';

describe('Lib1component27Component', () => {
  let component: Lib1component27Component;
  let fixture: ComponentFixture<Lib1component27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
