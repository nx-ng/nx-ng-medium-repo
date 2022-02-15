import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component70Component } from './lib1component70.component';

describe('Lib1component70Component', () => {
  let component: Lib1component70Component;
  let fixture: ComponentFixture<Lib1component70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
