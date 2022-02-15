import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component51Component } from './lib1component51.component';

describe('Lib1component51Component', () => {
  let component: Lib1component51Component;
  let fixture: ComponentFixture<Lib1component51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component51Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
