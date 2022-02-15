import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component39Component } from './lib1component39.component';

describe('Lib1component39Component', () => {
  let component: Lib1component39Component;
  let fixture: ComponentFixture<Lib1component39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
