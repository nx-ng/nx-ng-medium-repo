import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component40Component } from './lib1component40.component';

describe('Lib1component40Component', () => {
  let component: Lib1component40Component;
  let fixture: ComponentFixture<Lib1component40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
