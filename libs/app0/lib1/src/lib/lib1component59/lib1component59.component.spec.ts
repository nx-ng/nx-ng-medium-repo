import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1component59Component } from './lib1component59.component';

describe('Lib1component59Component', () => {
  let component: Lib1component59Component;
  let fixture: ComponentFixture<Lib1component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib1component59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
