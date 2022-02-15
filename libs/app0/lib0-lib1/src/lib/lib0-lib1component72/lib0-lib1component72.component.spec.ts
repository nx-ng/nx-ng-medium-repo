import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component72Component } from './lib0-lib1component72.component';

describe('Lib0Lib1component72Component', () => {
  let component: Lib0Lib1component72Component;
  let fixture: ComponentFixture<Lib0Lib1component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
