import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component84Component } from './lib1-lib0component84.component';

describe('Lib1Lib0component84Component', () => {
  let component: Lib1Lib0component84Component;
  let fixture: ComponentFixture<Lib1Lib0component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
