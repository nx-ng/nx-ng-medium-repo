import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component24Component } from './lib1component24.component';

describe('Lib1component24Component', () => {
  let component: Lib1component24Component;
  let fixture: ComponentFixture<Lib1component24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
