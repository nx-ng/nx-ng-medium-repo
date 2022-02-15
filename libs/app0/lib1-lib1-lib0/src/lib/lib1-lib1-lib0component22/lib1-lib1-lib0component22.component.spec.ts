import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1Lib0component22Component } from './lib1-lib1-lib0component22.component';

describe('Lib1Lib1Lib0component22Component', () => {
  let component: Lib1Lib1Lib0component22Component;
  let fixture: ComponentFixture<Lib1Lib1Lib0component22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1Lib0component22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1Lib0component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
