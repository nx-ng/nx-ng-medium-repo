import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component29Component } from './lib1component29.component';

describe('Lib1component29Component', () => {
  let component: Lib1component29Component;
  let fixture: ComponentFixture<Lib1component29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
