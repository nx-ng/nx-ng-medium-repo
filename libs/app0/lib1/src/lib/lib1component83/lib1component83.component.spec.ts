import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component83Component } from './lib1component83.component';

describe('Lib1component83Component', () => {
  let component: Lib1component83Component;
  let fixture: ComponentFixture<Lib1component83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
