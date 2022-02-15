import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component75Component } from './lib1component75.component';

describe('Lib1component75Component', () => {
  let component: Lib1component75Component;
  let fixture: ComponentFixture<Lib1component75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
