import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component2Component } from './lib1component2.component';

describe('Lib1component2Component', () => {
  let component: Lib1component2Component;
  let fixture: ComponentFixture<Lib1component2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
