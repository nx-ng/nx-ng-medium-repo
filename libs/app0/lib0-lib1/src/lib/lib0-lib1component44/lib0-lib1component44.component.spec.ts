import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component44Component } from './lib0-lib1component44.component';

describe('Lib0Lib1component44Component', () => {
  let component: Lib0Lib1component44Component;
  let fixture: ComponentFixture<Lib0Lib1component44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
