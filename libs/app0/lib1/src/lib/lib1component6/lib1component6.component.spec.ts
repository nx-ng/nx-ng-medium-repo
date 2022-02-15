import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component6Component } from './lib1component6.component';

describe('Lib1component6Component', () => {
  let component: Lib1component6Component;
  let fixture: ComponentFixture<Lib1component6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
