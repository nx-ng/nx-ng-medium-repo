import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component36Component } from './lib1component36.component';

describe('Lib1component36Component', () => {
  let component: Lib1component36Component;
  let fixture: ComponentFixture<Lib1component36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
