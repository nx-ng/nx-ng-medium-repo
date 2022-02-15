import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component41Component } from './lib0component41.component';

describe('Lib0component41Component', () => {
  let component: Lib0component41Component;
  let fixture: ComponentFixture<Lib0component41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
