import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component69Component } from './lib1component69.component';

describe('Lib1component69Component', () => {
  let component: Lib1component69Component;
  let fixture: ComponentFixture<Lib1component69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
