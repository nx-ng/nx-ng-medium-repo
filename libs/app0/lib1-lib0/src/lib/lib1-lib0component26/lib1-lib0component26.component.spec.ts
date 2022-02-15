import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component26Component } from './lib1-lib0component26.component';

describe('Lib1Lib0component26Component', () => {
  let component: Lib1Lib0component26Component;
  let fixture: ComponentFixture<Lib1Lib0component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
