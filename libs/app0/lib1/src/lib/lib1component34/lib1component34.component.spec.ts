import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component34Component } from './lib1component34.component';

describe('Lib1component34Component', () => {
  let component: Lib1component34Component;
  let fixture: ComponentFixture<Lib1component34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
