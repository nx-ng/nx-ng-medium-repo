import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component47Component } from './lib1component47.component';

describe('Lib1component47Component', () => {
  let component: Lib1component47Component;
  let fixture: ComponentFixture<Lib1component47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component47Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
