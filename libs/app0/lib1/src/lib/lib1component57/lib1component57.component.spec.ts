import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component57Component } from './lib1component57.component';

describe('Lib1component57Component', () => {
  let component: Lib1component57Component;
  let fixture: ComponentFixture<Lib1component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component57Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
