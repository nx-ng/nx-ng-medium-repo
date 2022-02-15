import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component60Component } from './lib1component60.component';

describe('Lib1component60Component', () => {
  let component: Lib1component60Component;
  let fixture: ComponentFixture<Lib1component60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
