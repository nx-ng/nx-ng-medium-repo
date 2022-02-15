import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component26Component } from './lib1component26.component';

describe('Lib1component26Component', () => {
  let component: Lib1component26Component;
  let fixture: ComponentFixture<Lib1component26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component26Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
