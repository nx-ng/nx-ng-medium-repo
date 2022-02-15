import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component96Component } from './lib1component96.component';

describe('Lib1component96Component', () => {
  let component: Lib1component96Component;
  let fixture: ComponentFixture<Lib1component96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
