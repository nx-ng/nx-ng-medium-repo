import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component66Component } from './lib1-lib1-lib0component66.component';

describe('Lib1Lib1Lib0component66Component', () => {
  let component: Lib1Lib1Lib0component66Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
