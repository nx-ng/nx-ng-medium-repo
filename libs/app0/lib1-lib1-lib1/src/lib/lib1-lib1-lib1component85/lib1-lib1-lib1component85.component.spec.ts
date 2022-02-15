import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib1component85Component } from './lib1-lib1-lib1component85.component';

describe('Lib1Lib1Lib1component85Component', () => {
  let component: Lib1Lib1Lib1component85Component;
  let fixture: ComponentFixture<Lib1Lib1Lib1component85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib1component85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib1component85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
