import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component41Component } from './lib1component41.component';

describe('Lib1component41Component', () => {
  let component: Lib1component41Component;
  let fixture: ComponentFixture<Lib1component41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
