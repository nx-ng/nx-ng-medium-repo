import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0Lib0Lib1component35Component } from './lib0-lib0-lib1component35.component';

describe('Lib0Lib0Lib1component35Component', () => {
  let component: Lib0Lib0Lib1component35Component;
  let fixture: ComponentFixture<Lib0Lib0Lib1component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0Lib0Lib1component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0Lib0Lib1component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
