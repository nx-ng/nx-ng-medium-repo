import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component65Component } from './lib0-lib1component65.component';

describe('Lib0Lib1component65Component', () => {
  let component: Lib0Lib1component65Component;
  let fixture: ComponentFixture<Lib0Lib1component65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
