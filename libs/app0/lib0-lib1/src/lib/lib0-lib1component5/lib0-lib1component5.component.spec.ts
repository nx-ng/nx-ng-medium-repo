import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component5Component } from './lib0-lib1component5.component';

describe('Lib0Lib1component5Component', () => {
  let component: Lib0Lib1component5Component;
  let fixture: ComponentFixture<Lib0Lib1component5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
