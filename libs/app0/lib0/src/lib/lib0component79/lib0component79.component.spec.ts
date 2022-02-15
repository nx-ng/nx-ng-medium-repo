import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0component79Component } from './lib0component79.component';

describe('Lib0component79Component', () => {
  let component: Lib0component79Component;
  let fixture: ComponentFixture<Lib0component79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib0component79Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0component79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
