import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component98Component } from './lib1component98.component';

describe('Lib1component98Component', () => {
  let component: Lib1component98Component;
  let fixture: ComponentFixture<Lib1component98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component98Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
