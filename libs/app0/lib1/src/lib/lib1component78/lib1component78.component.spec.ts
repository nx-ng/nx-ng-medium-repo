import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component78Component } from './lib1component78.component';

describe('Lib1component78Component', () => {
  let component: Lib1component78Component;
  let fixture: ComponentFixture<Lib1component78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component78Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
