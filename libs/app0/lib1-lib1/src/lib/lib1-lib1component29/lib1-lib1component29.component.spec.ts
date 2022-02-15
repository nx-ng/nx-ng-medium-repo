import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component29Component } from './lib1-lib1component29.component';

describe('Lib1Lib1component29Component', () => {
  let component: Lib1Lib1component29Component;
  let fixture: ComponentFixture<Lib1Lib1component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
