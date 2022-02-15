import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component32Component } from './lib1component32.component';

describe('Lib1component32Component', () => {
  let component: Lib1component32Component;
  let fixture: ComponentFixture<Lib1component32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component32Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
