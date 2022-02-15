import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component87Component } from './lib1component87.component';

describe('Lib1component87Component', () => {
  let component: Lib1component87Component;
  let fixture: ComponentFixture<Lib1component87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component87Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
