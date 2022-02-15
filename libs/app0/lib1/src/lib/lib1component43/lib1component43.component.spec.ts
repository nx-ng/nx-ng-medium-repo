import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component43Component } from './lib1component43.component';

describe('Lib1component43Component', () => {
  let component: Lib1component43Component;
  let fixture: ComponentFixture<Lib1component43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component43Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
