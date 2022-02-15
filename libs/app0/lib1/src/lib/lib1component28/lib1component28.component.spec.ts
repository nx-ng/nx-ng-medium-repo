import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component28Component } from './lib1component28.component';

describe('Lib1component28Component', () => {
  let component: Lib1component28Component;
  let fixture: ComponentFixture<Lib1component28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
