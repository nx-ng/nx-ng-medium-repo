import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component93Component } from './lib1component93.component';

describe('Lib1component93Component', () => {
  let component: Lib1component93Component;
  let fixture: ComponentFixture<Lib1component93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
