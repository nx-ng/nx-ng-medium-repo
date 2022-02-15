import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component22Component } from './lib1component22.component';

describe('Lib1component22Component', () => {
  let component: Lib1component22Component;
  let fixture: ComponentFixture<Lib1component22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
