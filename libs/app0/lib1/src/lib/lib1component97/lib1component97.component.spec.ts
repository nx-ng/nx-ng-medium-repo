import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component97Component } from './lib1component97.component';

describe('Lib1component97Component', () => {
  let component: Lib1component97Component;
  let fixture: ComponentFixture<Lib1component97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component97Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
