import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib0component46Component } from './lib1-lib0component46.component';

describe('Lib1Lib0component46Component', () => {
  let component: Lib1Lib0component46Component;
  let fixture: ComponentFixture<Lib1Lib0component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib0component46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib0component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
