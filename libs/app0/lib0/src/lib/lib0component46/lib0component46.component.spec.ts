import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component46Component } from './lib0component46.component';

describe('Lib0component46Component', () => {
  let component: Lib0component46Component;
  let fixture: ComponentFixture<Lib0component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component46Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
