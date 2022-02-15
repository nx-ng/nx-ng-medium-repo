import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component77Component } from './lib1component77.component';

describe('Lib1component77Component', () => {
  let component: Lib1component77Component;
  let fixture: ComponentFixture<Lib1component77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component77Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
