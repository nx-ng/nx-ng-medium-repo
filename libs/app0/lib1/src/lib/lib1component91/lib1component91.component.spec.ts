import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component91Component } from './lib1component91.component';

describe('Lib1component91Component', () => {
  let component: Lib1component91Component;
  let fixture: ComponentFixture<Lib1component91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component91Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
