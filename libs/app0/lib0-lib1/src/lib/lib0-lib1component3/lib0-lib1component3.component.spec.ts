import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib1component3Component } from './lib0-lib1component3.component';

describe('Lib0Lib1component3Component', () => {
  let component: Lib0Lib1component3Component;
  let fixture: ComponentFixture<Lib0Lib1component3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib1component3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib1component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
