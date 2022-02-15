import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component89Component } from './lib1-lib1component89.component';

describe('Lib1Lib1component89Component', () => {
  let component: Lib1Lib1component89Component;
  let fixture: ComponentFixture<Lib1Lib1component89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component89Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
