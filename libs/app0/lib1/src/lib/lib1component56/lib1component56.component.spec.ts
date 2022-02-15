import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component56Component } from './lib1component56.component';

describe('Lib1component56Component', () => {
  let component: Lib1component56Component;
  let fixture: ComponentFixture<Lib1component56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
