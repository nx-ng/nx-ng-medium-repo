import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component38Component } from './lib1component38.component';

describe('Lib1component38Component', () => {
  let component: Lib1component38Component;
  let fixture: ComponentFixture<Lib1component38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
