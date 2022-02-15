import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component46Component } from './lib1component46.component';

describe('Lib1component46Component', () => {
  let component: Lib1component46Component;
  let fixture: ComponentFixture<Lib1component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
