import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component74Component } from './lib1component74.component';

describe('Lib1component74Component', () => {
  let component: Lib1component74Component;
  let fixture: ComponentFixture<Lib1component74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component74Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
