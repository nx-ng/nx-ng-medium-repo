import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component35Component } from './lib1component35.component';

describe('Lib1component35Component', () => {
  let component: Lib1component35Component;
  let fixture: ComponentFixture<Lib1component35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
