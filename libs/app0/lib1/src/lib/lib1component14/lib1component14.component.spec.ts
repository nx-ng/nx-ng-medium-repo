import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component14Component } from './lib1component14.component';

describe('Lib1component14Component', () => {
  let component: Lib1component14Component;
  let fixture: ComponentFixture<Lib1component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
