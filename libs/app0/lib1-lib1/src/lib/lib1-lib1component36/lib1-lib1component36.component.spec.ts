import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component36Component } from './lib1-lib1component36.component';

describe('Lib1Lib1component36Component', () => {
  let component: Lib1Lib1component36Component;
  let fixture: ComponentFixture<Lib1Lib1component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
