import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component79Component } from './lib0-lib1component79.component';

describe('Lib0Lib1component79Component', () => {
  let component: Lib0Lib1component79Component;
  let fixture: ComponentFixture<Lib0Lib1component79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
