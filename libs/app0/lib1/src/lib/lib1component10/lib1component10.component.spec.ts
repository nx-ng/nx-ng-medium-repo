import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component10Component } from './lib1component10.component';

describe('Lib1component10Component', () => {
  let component: Lib1component10Component;
  let fixture: ComponentFixture<Lib1component10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
