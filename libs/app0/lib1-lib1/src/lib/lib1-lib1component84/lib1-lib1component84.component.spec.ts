import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Lib1component84Component } from './lib1-lib1component84.component';

describe('Lib1Lib1component84Component', () => {
  let component: Lib1Lib1component84Component;
  let fixture: ComponentFixture<Lib1Lib1component84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1Lib1component84Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Lib1component84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
