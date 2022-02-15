import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component59Component } from './lib0component59.component';

describe('Lib0component59Component', () => {
  let component: Lib0component59Component;
  let fixture: ComponentFixture<Lib0component59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component59Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
