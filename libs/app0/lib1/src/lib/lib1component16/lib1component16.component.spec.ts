import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component16Component } from './lib1component16.component';

describe('Lib1component16Component', () => {
  let component: Lib1component16Component;
  let fixture: ComponentFixture<Lib1component16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
