import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component76Component } from './lib1component76.component';

describe('Lib1component76Component', () => {
  let component: Lib1component76Component;
  let fixture: ComponentFixture<Lib1component76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
