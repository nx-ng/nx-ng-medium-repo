import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component13Component } from './lib1component13.component';

describe('Lib1component13Component', () => {
  let component: Lib1component13Component;
  let fixture: ComponentFixture<Lib1component13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
