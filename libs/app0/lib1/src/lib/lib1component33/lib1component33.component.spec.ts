import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component33Component } from './lib1component33.component';

describe('Lib1component33Component', () => {
  let component: Lib1component33Component;
  let fixture: ComponentFixture<Lib1component33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
