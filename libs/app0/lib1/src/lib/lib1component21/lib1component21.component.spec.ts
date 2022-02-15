import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component21Component } from './lib1component21.component';

describe('Lib1component21Component', () => {
  let component: Lib1component21Component;
  let fixture: ComponentFixture<Lib1component21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
