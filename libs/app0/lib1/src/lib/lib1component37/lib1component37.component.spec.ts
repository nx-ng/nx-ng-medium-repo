import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component37Component } from './lib1component37.component';

describe('Lib1component37Component', () => {
  let component: Lib1component37Component;
  let fixture: ComponentFixture<Lib1component37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
