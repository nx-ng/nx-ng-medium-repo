import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component72Component } from './lib1component72.component';

describe('Lib1component72Component', () => {
  let component: Lib1component72Component;
  let fixture: ComponentFixture<Lib1component72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
