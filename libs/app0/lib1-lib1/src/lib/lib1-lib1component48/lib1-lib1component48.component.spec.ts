import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component48Component } from './lib1-lib1component48.component';

describe('Lib1Lib1component48Component', () => {
  let component: Lib1Lib1component48Component;
  let fixture: ComponentFixture<Lib1Lib1component48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
